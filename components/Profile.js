import PromptCard from "./PromptCard"

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
    return (
        <section>
            <h2 className="text-3xl font-bold text-extra-color">
                {name} Profile
            </h2>
            <p className="my-3 text-[#2a2626]">{desc}</p>

            <div className="card border-2 p-4 grid grid-cols-1 gap-5 sm:grid-cols-2 min-[1200px]:grid-cols-3 mb-5">
                {data.map((post) => (
                    <PromptCard
                        key={post._id}
                        post={post}
                        handleEdit={() => handleEdit && handleEdit(post)}
                        handleDelete={() => handleDelete && handleDelete(post)}
                    />
                ))}
            </div>
        </section>
    )
}

export default Profile