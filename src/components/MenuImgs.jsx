const MenuImgs = ({data, imageIndex}) => {
  return (
    <div style={{height: `calc(100vh - 120px)`}}>
        {data.map((img) => {
            const {id, name, image} = img

            let imgClass = ''
            if (imageIndex === id){
              imgClass = "menuImg active"
            } else {
              imgClass = 'menuImg'
            }

            return <div key={id} className={imgClass} style={{bottom: `calc(${id-1}*(100vh - 120px))`}}><img src={image} alt={name} /></div>
        })}
    </div>
  )
}
export default MenuImgs