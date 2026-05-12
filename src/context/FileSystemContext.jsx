import { createContext, useContext, useState, useCallback } from 'react';

const FileSystemContext = createContext(null);

const makeId = () => Math.random().toString(36).slice(2, 10);

const initialNodes = {
  'this-pc': { id: 'this-pc', name: 'This PC', type: 'this-pc', children: ['drive-c'] },
  'drive-c': { id: 'drive-c', name: 'Local Disk (C:)', type: 'drive', parent: 'this-pc', children: ['desktop', 'documents', 'downloads', 'pictures'] },
  'desktop':   { id: 'desktop',   name: 'Desktop',   type: 'folder', parent: 'drive-c', children: [] },
  'documents': { id: 'documents', name: 'Documents', type: 'folder', parent: 'drive-c', children: [] },
  'downloads': { id: 'downloads', name: 'Downloads', type: 'folder', parent: 'drive-c', children: [] },
  'pictures':  { id: 'pictures',  name: 'Pictures',  type: 'folder', parent: 'drive-c', children: [] },
};

export function FileSystemProvider({ children }) {
  const [nodes, setNodes] = useState(initialNodes);
  const [renaming, setRenaming] = useState(null); // id being renamed

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
    while (siblings.some((n) => n.name === name)) {
      name = `New folder (${counter++})`;
    }
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
    while (siblings.some((n) => n.name === name)) {
      name = `New Text Document (${counter++}).txt`;
    }
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

  const deleteNode = useCallback((id) => {
    setNodes((prev) => {
      const node = prev[id];
      if (!node) return prev;
      const next = { ...prev };
      // Remove from parent
      if (node.parent && next[node.parent]) {
        next[node.parent] = {
          ...next[node.parent],
          children: next[node.parent].children.filter((c) => c !== id),
        };
      }
      // Recursively delete children
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

  return (
    <FileSystemContext.Provider value={{
      nodes, getNode, getChildren,
      createFolder, createTextFile,
      renameNode, deleteNode, saveFileContent,
      renaming, setRenaming, getPath,
    }}>
      {children}
    </FileSystemContext.Provider>
  );
}

export const useFS = () => useContext(FileSystemContext);
