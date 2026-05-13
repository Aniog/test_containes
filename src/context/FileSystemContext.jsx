import { createContext, useContext, useState, useCallback, useEffect } from 'react';

const FileSystemContext = createContext(null);
const LS_KEY = 'win10_fs_nodes';

const makeId = () => Math.random().toString(36).slice(2, 10);

const initialNodes = {
  'this-pc':   { id: 'this-pc',   name: 'This PC',         type: 'this-pc', children: ['drive-c'] },
  'drive-c':   { id: 'drive-c',   name: 'Local Disk (C:)', type: 'drive',   parent: 'this-pc', children: ['desktop', 'documents', 'downloads', 'pictures', 'trash'] },
  'desktop':   { id: 'desktop',   name: 'Desktop',         type: 'folder',  parent: 'drive-c', children: [] },
  'documents': { id: 'documents', name: 'Documents',       type: 'folder',  parent: 'drive-c', children: [] },
  'downloads': { id: 'downloads', name: 'Downloads',       type: 'folder',  parent: 'drive-c', children: [] },
  'pictures':  { id: 'pictures',  name: 'Pictures',        type: 'folder',  parent: 'drive-c', children: [] },
  'trash':     { id: 'trash',     name: 'Recycle Bin',     type: 'trash',   parent: 'drive-c', children: [] },
};

function loadNodes() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      // Ensure system nodes always exist (merge, don't overwrite user data)
      return { ...initialNodes, ...parsed };
    }
  } catch (_) { /* ignore */ }
  return initialNodes;
}

export function FileSystemProvider({ children }) {
  const [nodes, setNodes] = useState(loadNodes);
  const [renaming, setRenaming] = useState(null);

  // Persist to localStorage on every change
  useEffect(() => {
    try { localStorage.setItem(LS_KEY, JSON.stringify(nodes)); } catch (_) { /* ignore */ }
  }, [nodes]);

  const getNode = useCallback((id) => nodes[id], [nodes]);

  const getChildren = useCallback((parentId) => {
    const parent = nodes[parentId];
    if (!parent) return [];
    return (parent.children || []).map((id) => nodes[id]).filter(Boolean);
  }, [nodes]);

  const createFolder = useCallback((parentId) => {
    const siblings = (nodes[parentId]?.children || []).map((id) => nodes[id]).filter(Boolean);
    let name = 'New folder';
    let counter = 1;
    while (siblings.some((n) => n.name === name)) name = `New folder (${counter++})`;
    const id = makeId();
    setNodes((prev) => ({
      ...prev,
      [id]: { id, name, type: 'folder', parent: parentId, children: [] },
      [parentId]: { ...prev[parentId], children: [...(prev[parentId].children || []), id] },
    }));
    setRenaming(id);
    return id;
  }, [nodes]);

  const createTextFile = useCallback((parentId) => {
    const siblings = (nodes[parentId]?.children || []).map((id) => nodes[id]).filter(Boolean);
    let name = 'New Text Document.txt';
    let counter = 1;
    while (siblings.some((n) => n.name === name)) name = `New Text Document (${counter++}).txt`;
    const id = makeId();
    setNodes((prev) => ({
      ...prev,
      [id]: { id, name, type: 'file', ext: 'txt', parent: parentId, content: '', children: [] },
      [parentId]: { ...prev[parentId], children: [...(prev[parentId].children || []), id] },
    }));
    setRenaming(id);
    return id;
  }, [nodes]);

  const renameNode = useCallback((id, newName) => {
    if (!newName.trim()) return;
    setNodes((prev) => ({ ...prev, [id]: { ...prev[id], name: newName.trim() } }));
    setRenaming(null);
  }, []);

  // Move to trash instead of permanent delete
  const deleteNode = useCallback((id) => {
    setNodes((prev) => {
      const node = prev[id];
      if (!node) return prev;
      const next = { ...prev };
      // Remove from original parent
      if (node.parent && next[node.parent]) {
        next[node.parent] = {
          ...next[node.parent],
          children: next[node.parent].children.filter((c) => c !== id),
        };
      }
      // Move to trash (store original parent for restore)
      next[id] = { ...node, parent: 'trash', originalParent: node.parent };
      next['trash'] = { ...next['trash'], children: [...(next['trash'].children || []), id] };
      return next;
    });
  }, []);

  // Restore from trash
  const restoreNode = useCallback((id) => {
    setNodes((prev) => {
      const node = prev[id];
      if (!node || node.parent !== 'trash') return prev;
      const targetParent = node.originalParent || 'documents';
      const next = { ...prev };
      // Remove from trash
      next['trash'] = { ...next['trash'], children: next['trash'].children.filter((c) => c !== id) };
      // Add back to original parent (if it still exists, else documents)
      const parent = next[targetParent] || next['documents'];
      const parentId = parent.id;
      next[parentId] = { ...parent, children: [...(parent.children || []), id] };
      next[id] = { ...node, parent: parentId, originalParent: undefined };
      return next;
    });
  }, []);

  // Permanently delete (from trash)
  const permanentDelete = useCallback((id) => {
    setNodes((prev) => {
      const node = prev[id];
      if (!node) return prev;
      const next = { ...prev };
      if (node.parent && next[node.parent]) {
        next[node.parent] = { ...next[node.parent], children: next[node.parent].children.filter((c) => c !== id) };
      }
      const deleteRecursive = (nid) => {
        const n = next[nid];
        if (!n) return;
        (n.children || []).forEach(deleteRecursive);
        delete next[nid];
      };
      deleteRecursive(id);
      return next;
    });
  }, []);

  // Empty trash
  const emptyTrash = useCallback(() => {
    setNodes((prev) => {
      const next = { ...prev };
      const trashChildren = [...(next['trash'].children || [])];
      const deleteRecursive = (nid) => {
        const n = next[nid];
        if (!n) return;
        (n.children || []).forEach(deleteRecursive);
        delete next[nid];
      };
      trashChildren.forEach(deleteRecursive);
      next['trash'] = { ...next['trash'], children: [] };
      return next;
    });
  }, []);

  const saveFileContent = useCallback((id, content) => {
    setNodes((prev) => ({ ...prev, [id]: { ...prev[id], content } }));
  }, []);

  const getPath = useCallback((id) => {
    const parts = [];
    let cur = nodes[id];
    while (cur) {
      parts.unshift(cur.name);
      cur = cur.parent ? nodes[cur.parent] : null;
    }
    return parts.join(' > ');
  }, [nodes]);

  const trashCount = (nodes['trash']?.children || []).length;

  return (
    <FileSystemContext.Provider value={{
      nodes, getNode, getChildren,
      createFolder, createTextFile,
      renameNode, deleteNode, restoreNode, permanentDelete, emptyTrash,
      saveFileContent, renaming, setRenaming, getPath, trashCount,
    }}>
      {children}
    </FileSystemContext.Provider>
  );
}

export const useFS = () => useContext(FileSystemContext);
