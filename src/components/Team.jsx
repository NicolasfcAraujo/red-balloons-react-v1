import { people } from "../data"

const Team = () => {
  return (
    <section>
        <div>

        </div>
        <div>
            {people.map((person) => {
                const { id, name, image, position, social } = person
                return (
                    <article key={id}>
                        <div>
                            <img src={image} alt={name} />
                        </div>
                        <div>
                            <h2>{name}</h2>
                            <h3>{position}</h3>
                            <ul>
                                {social.map((socialMedia) => {
                                    const { socialId, socialName, url} = socialMedia

                                    return (
                                        <li key={socialId}>
                                            <a href={url}>
                                                <i class={socialName}></i>
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </article>
                )
            })}
        </div>
    </section>
  )
}
export default Team