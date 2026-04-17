import { useEffect, useRef, useState } from 'react'
import { API } from '@strikingly/sdk'

export function buildPublicAssetUrl(s3Domain, storageKey) {
  const base = (s3Domain || '').trim().replace(/\/+$/, '')
  const path = (storageKey || '').trim().replace(/^\/+/, '')
  if (!base || !path) return ''
  return `${base}/${path}`
}

const INITIAL_STATE = {
  status: 'idle',
  result: null,
  error: '',
  file: null,
}

export default function UploadDemo() {
  const [siteId, setSiteId] = useState('')
  const [domain, setDomain] = useState('')
  const [s3Domain, setS3Domain] = useState('')

  const [imageState, setImageState] = useState(INITIAL_STATE)
  const [fileState, setFileState] = useState(INITIAL_STATE)

  const imageInputRef = useRef(null)
  const fileInputRef = useRef(null)

  const [previewUrl, setPreviewUrl] = useState('')

  useEffect(() => {
    if (!imageState.file) {
      setPreviewUrl('')
      return
    }
    const objectUrl = URL.createObjectURL(imageState.file)
    setPreviewUrl(objectUrl)
    return () => URL.revokeObjectURL(objectUrl)
  }, [imageState.file])

  const canUpload = Boolean(siteId.trim() && domain.trim())

  async function handleUploadImage() {
    const file = imageState.file
    if (!file || !canUpload) return

    setImageState((s) => ({ ...s, status: 'uploading', result: null, error: '' }))
    try {
      const result = await API.uploadImage(siteId.trim(), domain.trim(), file)
      setImageState((s) => ({ ...s, status: 'success', result }))
    } catch (err) {
      setImageState((s) => ({
        ...s,
        status: 'error',
        error: err instanceof Error ? err.message : String(err),
      }))
    }
  }

  async function handleUploadFile() {
    const file = fileState.file
    if (!file || !canUpload) return

    setFileState((s) => ({ ...s, status: 'uploading', result: null, error: '' }))
    try {
      const result = await API.uploadFile(siteId.trim(), domain.trim(), file)
      setFileState((s) => ({ ...s, status: 'success', result }))
    } catch (err) {
      setFileState((s) => ({
        ...s,
        status: 'error',
        error: err instanceof Error ? err.message : String(err),
      }))
    }
  }

  function handleReset(which) {
    if (which === 'image') {
      setImageState(INITIAL_STATE)
      if (imageInputRef.current) imageInputRef.current.value = ''
    } else {
      setFileState(INITIAL_STATE)
      if (fileInputRef.current) fileInputRef.current.value = ''
    }
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>Upload API Demo</h1>
          <p style={styles.subtitle}>
            测试 <code style={styles.code}>API.uploadImage</code> 与{' '}
            <code style={styles.code}>API.uploadFile</code>
          </p>
        </header>

        <section style={styles.card}>
          <h2 style={styles.sectionTitle}>基础配置</h2>
          <div style={styles.grid2}>
            <label style={styles.label}>
              <span style={styles.labelText}>siteId</span>
              <input
                style={styles.input}
                value={siteId}
                onChange={(e) => setSiteId(e.target.value)}
                placeholder="e.g. site_123"
              />
            </label>
            <label style={styles.label}>
              <span style={styles.labelText}>domain（presign 接口）</span>
              <input
                style={styles.input}
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="e.g. https://my.domain.com"
              />
            </label>
          </div>
          <label style={{ ...styles.label, marginTop: 4 }}>
            <span style={styles.labelText}>
              S3_DOMAIN（展示用：CDN / 静态资源根地址）
            </span>
            <input
              style={styles.input}
              value={s3Domain}
              onChange={(e) => setS3Domain(e.target.value)}
              placeholder="e.g. https://cd.i.strikingly.com"
            />
          </label>
          {!canUpload && (
            <p style={styles.hint}>请先填写 siteId 和 domain 再上传</p>
          )}
          {canUpload && !s3Domain.trim() && (
            <p style={styles.hint}>
              上传可不填 S3_DOMAIN；填写后成功结果会展示「S3_DOMAIN + storageKey」完整链接
            </p>
          )}
        </section>

        <section style={styles.card}>
          <h2 style={styles.sectionTitle}>Image Upload</h2>
          <div style={styles.row}>
            <input
              ref={imageInputRef}
              type="file"
              accept="image/*"
              onChange={(e) => {
                const f = e.target.files?.[0] ?? null
                setImageState({ ...INITIAL_STATE, file: f })
              }}
              style={styles.fileInput}
            />
            <button
              type="button"
              onClick={handleUploadImage}
              disabled={
                !imageState.file ||
                imageState.status === 'uploading' ||
                !canUpload
              }
              style={{
                ...styles.button,
                ...(imageState.status === 'uploading' ? styles.buttonBusy : {}),
              }}
            >
              {imageState.status === 'uploading'
                ? 'Uploading…'
                : 'Upload Image'}
            </button>
            {imageState.file && (
              <button
                type="button"
                onClick={() => handleReset('image')}
                style={styles.buttonGhost}
              >
                Reset
              </button>
            )}
          </div>

          {imageState.file && (
            <div style={styles.meta}>
              <strong>{imageState.file.name}</strong>
              <span style={styles.metaDim}>
                {formatBytes(imageState.file.size)} ·{' '}
                {imageState.file.type || 'unknown'}
              </span>
            </div>
          )}

          {previewUrl && (
            <div style={styles.previewBox}>
              <img src={previewUrl} alt="preview" style={styles.previewImg} />
            </div>
          )}

          <UploadResult
            state={imageState}
            label="image"
            s3Domain={s3Domain}
          />
        </section>

        <section style={styles.card}>
          <h2 style={styles.sectionTitle}>File Upload</h2>
          <div style={styles.row}>
            <input
              ref={fileInputRef}
              type="file"
              onChange={(e) => {
                const f = e.target.files?.[0] ?? null
                setFileState({ ...INITIAL_STATE, file: f })
              }}
              style={styles.fileInput}
            />
            <button
              type="button"
              onClick={handleUploadFile}
              disabled={
                !fileState.file ||
                fileState.status === 'uploading' ||
                !canUpload
              }
              style={{
                ...styles.button,
                ...(fileState.status === 'uploading' ? styles.buttonBusy : {}),
              }}
            >
              {fileState.status === 'uploading' ? 'Uploading…' : 'Upload File'}
            </button>
            {fileState.file && (
              <button
                type="button"
                onClick={() => handleReset('file')}
                style={styles.buttonGhost}
              >
                Reset
              </button>
            )}
          </div>

          {fileState.file && (
            <div style={styles.meta}>
              <strong>{fileState.file.name}</strong>
              <span style={styles.metaDim}>
                {formatBytes(fileState.file.size)} ·{' '}
                {fileState.file.type || 'unknown'}
              </span>
            </div>
          )}

          <UploadResult
            state={fileState}
            label="file"
            s3Domain={s3Domain}
          />
        </section>
      </div>
    </div>
  )
}

function UploadResult({ state, label, s3Domain }) {
  if (state.status === 'success' && state.result) {
    const publicUrl = buildPublicAssetUrl(s3Domain, state.result.storageKey)
    return (
      <div style={styles.resultSuccess}>
        <div style={styles.resultTitle}>Uploaded {label} successfully</div>
        {publicUrl ? (
          <div style={styles.publicUrlBlock}>
            <div style={styles.publicUrlLabel}>
              访问地址（S3_DOMAIN + storageKey）
            </div>
            <a
              href={publicUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.publicUrlLink}
            >
              {publicUrl}
            </a>
            {label === 'image' && (
              <div style={styles.uploadedPreviewWrap}>
                <img
                  src={publicUrl}
                  alt="uploaded"
                  style={styles.uploadedPreviewImg}
                />
              </div>
            )}
          </div>
        ) : (
          <p style={styles.publicUrlHint}>
            在「基础配置」中填写 S3_DOMAIN 后，将在此显示完整 URL
            {label === 'image' ? ' 与线上图片预览' : ''}
          </p>
        )}
        <div style={styles.jsonBlockLabel}>上传接口返回 JSON</div>
        <pre style={styles.resultJson}>
          {JSON.stringify(state.result, null, 2)}
        </pre>
      </div>
    )
  }

  if (state.status === 'error') {
    return (
      <div style={styles.resultError}>
        <div style={styles.resultTitle}>❌ Upload failed</div>
        <pre style={styles.resultErrorMsg}>{state.error}</pre>
      </div>
    )
  }

  return null
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`
}

const styles = {
  page: {
    minHeight: '100vh',
    background: '#f5f6f8',
    padding: '32px 16px',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    color: '#1f2937',
  },
  container: {
    maxWidth: 720,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  header: { textAlign: 'center' },
  title: { margin: 0, fontSize: 28, fontWeight: 700 },
  subtitle: { margin: '6px 0 0', color: '#6b7280', fontSize: 14 },
  code: {
    background: '#eef2ff',
    color: '#4338ca',
    padding: '2px 6px',
    borderRadius: 4,
    fontSize: 13,
  },
  card: {
    background: '#fff',
    padding: 20,
    borderRadius: 12,
    boxShadow: '0 1px 2px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.06)',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  sectionTitle: { margin: 0, fontSize: 16, fontWeight: 600 },
  grid2: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 12,
  },
  label: { display: 'flex', flexDirection: 'column', gap: 6 },
  labelText: { fontSize: 12, color: '#6b7280', fontWeight: 500 },
  input: {
    padding: '8px 10px',
    borderRadius: 8,
    border: '1px solid #d1d5db',
    fontSize: 14,
    outline: 'none',
    background: '#fff',
  },
  hint: { margin: 0, color: '#9ca3af', fontSize: 12 },
  row: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    flexWrap: 'wrap',
  },
  fileInput: { fontSize: 13 },
  button: {
    padding: '8px 14px',
    borderRadius: 8,
    border: 'none',
    background: '#4f46e5',
    color: '#fff',
    fontSize: 13,
    fontWeight: 500,
    cursor: 'pointer',
  },
  buttonBusy: { opacity: 0.6, cursor: 'wait' },
  buttonGhost: {
    padding: '8px 12px',
    borderRadius: 8,
    border: '1px solid #d1d5db',
    background: '#fff',
    color: '#374151',
    fontSize: 13,
    cursor: 'pointer',
  },
  meta: {
    display: 'flex',
    gap: 8,
    alignItems: 'baseline',
    fontSize: 13,
  },
  metaDim: { color: '#6b7280' },
  previewBox: {
    marginTop: 4,
    borderRadius: 8,
    overflow: 'hidden',
    background: '#f3f4f6',
    display: 'inline-block',
    maxWidth: '100%',
  },
  previewImg: {
    display: 'block',
    maxWidth: '100%',
    maxHeight: 240,
    objectFit: 'contain',
  },
  resultSuccess: {
    padding: 12,
    borderRadius: 8,
    background: '#ecfdf5',
    border: '1px solid #a7f3d0',
    color: '#065f46',
    fontSize: 13,
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  resultError: {
    padding: 12,
    borderRadius: 8,
    background: '#fef2f2',
    border: '1px solid #fecaca',
    color: '#991b1b',
    fontSize: 13,
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  resultTitle: { fontWeight: 600 },
  publicUrlBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    marginTop: 4,
  },
  publicUrlLabel: {
    fontSize: 11,
    fontWeight: 600,
    color: '#047857',
    textTransform: 'uppercase',
    letterSpacing: '0.02em',
  },
  publicUrlLink: {
    color: '#047857',
    wordBreak: 'break-all',
    fontSize: 13,
  },
  publicUrlHint: {
    margin: '4px 0 0',
    fontSize: 12,
    color: '#059669',
    opacity: 0.9,
  },
  jsonBlockLabel: {
    marginTop: 12,
    fontSize: 11,
    fontWeight: 600,
    color: '#047857',
  },
  uploadedPreviewWrap: {
    marginTop: 8,
    borderRadius: 8,
    overflow: 'hidden',
    background: '#d1fae5',
    display: 'inline-block',
    maxWidth: '100%',
    border: '1px solid #6ee7b7',
  },
  uploadedPreviewImg: {
    display: 'block',
    maxWidth: '100%',
    maxHeight: 220,
    objectFit: 'contain',
    verticalAlign: 'middle',
  },
  resultJson: {
    margin: 0,
    marginTop: 8,
    padding: 10,
    background: '#f0fdf4',
    borderRadius: 6,
    fontSize: 12,
    lineHeight: 1.45,
    overflow: 'auto',
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
    color: '#14532d',
    border: '1px solid #bbf7d0',
  },
  resultErrorMsg: {
    margin: 0,
    whiteSpace: 'pre-wrap',
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
    fontSize: 12,
  },
}
