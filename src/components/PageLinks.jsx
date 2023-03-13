const PageLinks = ({links, className, altMenuRef}) => {
  return (
    <>
        {links.map((link) => {
            const {id, url, name} = link
            return <li key={id} className={className} ref={altMenuRef}><a href={url}>{name}</a></li>
        })}
    </>
  )
}
export default PageLinks