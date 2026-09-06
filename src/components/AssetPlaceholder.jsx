export default function AssetPlaceholder({ title, message = 'Official artwork will appear here once supplied.' }) {
  return <div className="asset-placeholder" role="status"><span className="asset-placeholder__mk">MK</span><strong>{title}</strong><p>{message}</p></div>
}
