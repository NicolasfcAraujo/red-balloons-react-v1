const PageLinks = ({links, className}) => {
  return (
    <>
        {links.map((link) => {
            const {id, url, name} = link
            return <li key={id} className={className}><a href={url}>{name}</a></li>
        })}
    </>
  )
}
export default PageLinks