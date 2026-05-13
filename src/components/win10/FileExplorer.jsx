import { useState, useRef, useCallback } from 'react';
import { useFS } from '../../context/FileSystemContext';
import ContextMenu from './ContextMenu';

const NAV_TREE = [
  { id: 'this-pc',   label: 'This PC',   icon: '💻', expandable: true },
  { id: 'desktop',   label: 'Desktop',   icon: '🖥️', indent: 1 },
  { id: 'documents', label: 'Documents', icon: '📄', indent: 1 },
  { id: 'downloads', label: 'Downloads', icon: '⬇️', indent: 1 },
  { id: 'pictures',  label: 'Pictures',  icon: '🖼️', indent: 1 },
  { id: 'trash',     label: 'Recycle Bin', icon: '🗑️', indent: 1 },
];

const FOLDER_ICON = '📁';
const FILE_ICONS = { txt: '📝', default: '📄' };

function getFileIcon(node) {
  if (node.type === 'folder') return FOLDER_ICON;
  if (node.type === 'drive') return '💾';
  return FILE_ICONS[node.ext] || FILE_ICONS.default;
}

export default function FileExplorer({ onOpenFile }) {
  const { getNode, getChildren, createFolder, createTextFile, deleteNode, renameNode, renaming, setRenaming, restoreNode, permanentDelete, emptyTrash } = useFS();
  const [currentId, setCurrentId] = useState('this-pc');
  const [history, setHistory] = useState(['this-pc']);
  const [histIdx, setHistIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [ctxMenu, setCtxMenu] = useState(null);
  const [viewMode, setViewMode] = useState('icons');
  const renameRef = useRef(null);

  const navigate = useCallback((id) => {
    const newHist = [...history.slice(0, histIdx + 1), id];
    setHistory(newHist);
    setHistIdx(newHist.length - 1);
    setCurrentId(id);
    setSelected(null);
  }, [history, histIdx]);

  const goBack = () => {
    if (histIdx > 0) { setHistIdx(histIdx - 1); setCurrentId(history[histIdx - 1]); setSelected(null); }
  };
  const goForward = () => {
    if (histIdx < history.length - 1) { setHistIdx(histIdx + 1); setCurrentId(history[histIdx + 1]); setSelected(null); }
  };
  const goUp = () => {
    const node = getNode(currentId);
    if (node?.parent) navigate(node.parent);
  };

  const currentNode = getNode(currentId);
  const children = getChildren(currentId);
  const isTrash = currentId === 'trash';

  const handleItemDblClick = (node) => {
    if (node.type === 'folder' || node.type === 'drive' || node.type === 'this-pc' || node.type === 'trash') {
      navigate(node.id);
    } else if (node.type === 'file' && node.ext === 'txt') {
      onOpenFile(node.id);
    }
  };

  const handleItemContextMenu = (e, node) => {
    e.preventDefault();
    e.stopPropagation();
    setSelected(node.id);
    const isInTrash = node.parent === 'trash';
    setCtxMenu({
      x: e.clientX, y: e.clientY,
      items: isInTrash ? [
        { label: '还原', icon: '↩️', onClick: () => { restoreNode(node.id); setSelected(null); } },
        { label: '永久删除', icon: '❌', onClick: () => { permanentDelete(node.id); setSelected(null); } },
        'separator',
        { label: '属性', icon: 'ℹ️', disabled: true },
      ] : [
        { label: '打开', icon: '📂', onClick: () => handleItemDblClick(node) },
        'separator',
        { label: '重命名', icon: '✏️', onClick: () => setRenaming(node.id) },
        { label: '删除', icon: '🗑️', onClick: () => { deleteNode(node.id); setSelected(null); } },
        'separator',
        { label: '属性', icon: 'ℹ️', disabled: true },
      ],
    });
  };

  const handleBgContextMenu = (e) => {
    e.preventDefault();
    setSelected(null);
    if (isTrash) {
      setCtxMenu({
        x: e.clientX, y: e.clientY,
        items: [
          { label: '清空回收站', icon: '🗑️', onClick: () => emptyTrash() },
          'separator',
          { label: '刷新', icon: '🔄', onClick: () => setSelected(null) },
        ],
      });
      return;
    }
    setCtxMenu({
      x: e.clientX, y: e.clientY,
      items: [
        { label: '新建文件夹', icon: '📁', onClick: () => createFolder(currentId) },
        { label: '新建文本文档', icon: '📝', onClick: () => createTextFile(currentId) },
        'separator',
        { label: '查看', icon: '👁️', disabled: true },
        { label: '刷新', icon: '🔄', onClick: () => setSelected(null) },
      ],
    });
  };

  const handleRenameKeyDown = (e, id) => {
    if (e.key === 'Enter') renameNode(id, e.target.value);
    if (e.key === 'Escape') setRenaming(null);
  };

  const buildPath = (id) => {
    const parts = [];
    let cur = getNode(id);
    while (cur) {
      parts.unshift(cur.name);
      cur = cur.parent ? getNode(cur.parent) : null;
    }
    return parts.join(' > ');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#fff', fontFamily: 'Segoe UI, system-ui, sans-serif' }}>

      {/* Toolbar ribbon */}
      <div style={{ background: '#f3f3f3', borderBottom: '1px solid #d0d0d0', padding: '4px 8px', display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
        <ToolBtn disabled={histIdx === 0} onClick={goBack} title="后退">‹</ToolBtn>
        <ToolBtn disabled={histIdx >= history.length - 1} onClick={goForward} title="前进">›</ToolBtn>
        <ToolBtn disabled={!currentNode?.parent} onClick={goUp} title="向上">↑</ToolBtn>
        <div style={{ width: 1, height: 20, background: '#d0d0d0', margin: '0 4px' }} />
        {isTrash ? (
          <ToolBtn onClick={() => emptyTrash()} title="清空回收站">
            <span style={{ fontSize: 13 }}>🗑️</span> <span style={{ fontSize: 12 }}>清空回收站</span>
          </ToolBtn>
        ) : (
          <>
            <ToolBtn onClick={() => createFolder(currentId)} title="新建文件夹">
              <span style={{ fontSize: 13 }}>📁</span> <span style={{ fontSize: 12 }}>新建文件夹</span>
            </ToolBtn>
            <ToolBtn onClick={() => createTextFile(currentId)} title="新建文本文档">
              <span style={{ fontSize: 13 }}>📝</span> <span style={{ fontSize: 12 }}>新建文本文档</span>
            </ToolBtn>
          </>
        )}
        <div style={{ flex: 1 }} />
        <ToolBtn onClick={() => setViewMode(viewMode === 'icons' ? 'list' : 'icons')} title="切换视图">
          {viewMode === 'icons' ? '☰' : '⊞'}
        </ToolBtn>
      </div>

      {/* Address bar */}
      <div style={{ background: '#fff', borderBottom: '1px solid #d0d0d0', padding: '3px 8px', display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
        <span style={{ color: '#555', fontSize: 12 }}>地址:</span>
        <div style={{ flex: 1, background: '#fff', border: '1px solid #0078d4', borderRadius: 2, padding: '2px 8px', fontSize: 13, color: '#000', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {buildPath(currentId)}
        </div>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <input placeholder="搜索" style={{ border: '1px solid #ccc', borderRadius: 2, padding: '2px 24px 2px 8px', fontSize: 12, width: 140, outline: 'none' }} />
          <span style={{ position: 'absolute', right: 6, color: '#888', fontSize: 12 }}>🔍</span>
        </div>
      </div>

      {/* Main area */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>

        {/* Left nav pane */}
        <div style={{ width: 180, background: '#f3f3f3', borderRight: '1px solid #d8d8d8', overflowY: 'auto', flexShrink: 0, padding: '4px 0' }}>
          <NavSection label="快速访问" />
          {NAV_TREE.map((item) => (
            <NavItem
              key={item.id}
              item={item}
              isActive={currentId === item.id}
              onClick={() => navigate(item.id)}
            />
          ))}
          <NavSection label="网络" />
        </div>

        {/* File area */}
        <div
          style={{ flex: 1, overflowY: 'auto', padding: 8, background: '#fff' }}
          onContextMenu={handleBgContextMenu}
          onClick={() => setSelected(null)}
        >
          {children.length === 0 ? (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#999', fontSize: 13 }}>
              此文件夹为空
            </div>
          ) : viewMode === 'icons' ? (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, alignContent: 'flex-start' }}>
              {children.map((node) => (
                <FileIconItem
                  key={node.id}
                  node={node}
                  isSelected={selected === node.id}
                  isRenaming={renaming === node.id}
                  renameRef={renameRef}
                  onClick={(e) => { e.stopPropagation(); setSelected(node.id); }}
                  onDblClick={() => handleItemDblClick(node)}
                  onContextMenu={(e) => handleItemContextMenu(e, node)}
                  onRenameKeyDown={handleRenameKeyDown}
                  onRenameBlur={(e, id) => renameNode(id, e.target.value)}
                />
              ))}
            </div>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ background: '#f3f3f3', borderBottom: '1px solid #d0d0d0' }}>
                  {['名称', '修改日期', '类型', '大小'].map((h) => (
                    <th key={h} style={{ padding: '4px 8px', textAlign: 'left', fontWeight: 400, color: '#333', borderRight: '1px solid #e0e0e0', cursor: 'default' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {children.map((node) => (
                  <FileListItem
                    key={node.id}
                    node={node}
                    isSelected={selected === node.id}
                    isRenaming={renaming === node.id}
                    renameRef={renameRef}
                    onClick={(e) => { e.stopPropagation(); setSelected(node.id); }}
                    onDblClick={() => handleItemDblClick(node)}
                    onContextMenu={(e) => handleItemContextMenu(e, node)}
                    onRenameKeyDown={handleRenameKeyDown}
                    onRenameBlur={(e, id) => renameNode(id, e.target.value)}
                  />
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Status bar */}
      <div style={{ height: 22, background: '#f3f3f3', borderTop: '1px solid #d0d0d0', display: 'flex', alignItems: 'center', padding: '0 12px', fontSize: 12, color: '#555', flexShrink: 0, gap: 16 }}>
        <span>{children.length} 个项目</span>
        {selected && <span>已选择: {getNode(selected)?.name}</span>}
      </div>

      {ctxMenu && <ContextMenu x={ctxMenu.x} y={ctxMenu.y} items={ctxMenu.items} onClose={() => setCtxMenu(null)} />}
    </div>
  );
}

function NavSection({ label }) {
  return <div style={{ padding: '8px 12px 2px', fontSize: 11, color: '#666', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>;
}

function NavItem({ item, isActive, onClick }) {
  return (
    <button onClick={onClick} style={{
      display: 'flex', alignItems: 'center', gap: 6,
      width: '100%', padding: `4px 12px 4px ${12 + (item.indent || 0) * 14}px`,
      border: 'none', background: isActive ? '#cce4f7' : 'transparent',
      cursor: 'default', textAlign: 'left', fontSize: 13, color: '#000',
      fontFamily: 'Segoe UI, system-ui, sans-serif',
    }}
      onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.background = '#e8e8e8'; }}
      onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.background = 'transparent'; }}
    >
      <span style={{ fontSize: 14 }}>{item.icon}</span>
      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.label}</span>
    </button>
  );
}

function FileIconItem({ node, isSelected, isRenaming, renameRef, onClick, onDblClick, onContextMenu, onRenameKeyDown, onRenameBlur }) {
  return (
    <div
      onClick={onClick}
      onDoubleClick={onDblClick}
      onContextMenu={onContextMenu}
      style={{
        width: 80, display: 'flex', flexDirection: 'column', alignItems: 'center',
        padding: '6px 4px', borderRadius: 2, cursor: 'default',
        background: isSelected ? '#cce4f7' : 'transparent',
        border: isSelected ? '1px solid #99c9e8' : '1px solid transparent',
        userSelect: 'none',
      }}
      onMouseEnter={(e) => { if (!isSelected) e.currentTarget.style.background = '#e8f4fd'; }}
      onMouseLeave={(e) => { if (!isSelected) e.currentTarget.style.background = 'transparent'; }}
    >
      <span style={{ fontSize: 36, lineHeight: 1 }}>{getFileIcon(node)}</span>
      {isRenaming ? (
        <input
          ref={renameRef}
          defaultValue={node.name}
          autoFocus
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => onRenameKeyDown(e, node.id)}
          onBlur={(e) => onRenameBlur(e, node.id)}
          style={{ width: 72, fontSize: 11, textAlign: 'center', border: '1px solid #0078d4', outline: 'none', padding: '1px 2px', marginTop: 2 }}
        />
      ) : (
        <span style={{ fontSize: 11, textAlign: 'center', marginTop: 3, wordBreak: 'break-word', lineHeight: 1.3, maxWidth: 76, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
          {node.name}
        </span>
      )}
    </div>
  );
}

function FileListItem({ node, isSelected, isRenaming, renameRef, onClick, onDblClick, onContextMenu, onRenameKeyDown, onRenameBlur }) {
  const typeLabel = node.type === 'folder' ? '文件夹' : node.ext === 'txt' ? '文本文档' : '文件';
  return (
    <tr
      onClick={onClick}
      onDoubleClick={onDblClick}
      onContextMenu={onContextMenu}
      style={{ background: isSelected ? '#cce4f7' : 'transparent', cursor: 'default', userSelect: 'none' }}
      onMouseEnter={(e) => { if (!isSelected) e.currentTarget.style.background = '#e8f4fd'; }}
      onMouseLeave={(e) => { if (!isSelected) e.currentTarget.style.background = isSelected ? '#cce4f7' : 'transparent'; }}
    >
      <td style={{ padding: '3px 8px', display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{ fontSize: 16 }}>{getFileIcon(node)}</span>
        {isRenaming ? (
          <input
            ref={renameRef}
            defaultValue={node.name}
            autoFocus
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => onRenameKeyDown(e, node.id)}
            onBlur={(e) => onRenameBlur(e, node.id)}
            style={{ fontSize: 13, border: '1px solid #0078d4', outline: 'none', padding: '1px 4px', width: 160 }}
          />
        ) : (
          <span>{node.name}</span>
        )}
      </td>
      <td style={{ padding: '3px 8px', color: '#555' }}>—</td>
      <td style={{ padding: '3px 8px', color: '#555' }}>{typeLabel}</td>
      <td style={{ padding: '3px 8px', color: '#555' }}>{node.type === 'file' ? `${(node.content?.length || 0)} 字节` : '—'}</td>
    </tr>
  );
}

function ToolBtn({ children, onClick, disabled, title }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      title={title}
      style={{
        display: 'flex', alignItems: 'center', gap: 4,
        padding: '3px 8px', border: '1px solid transparent', borderRadius: 2,
        background: 'transparent', cursor: disabled ? 'default' : 'default',
        fontSize: 14, color: disabled ? '#aaa' : '#333',
        fontFamily: 'Segoe UI, system-ui, sans-serif',
      }}
      onMouseEnter={(e) => { if (!disabled) { e.currentTarget.style.background = '#e5e5e5'; e.currentTarget.style.borderColor = '#c8c8c8'; } }}
      onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'transparent'; }}
    >
      {children}
    </button>
  );
}
