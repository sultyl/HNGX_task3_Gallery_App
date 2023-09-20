import Gallery from "@/components/Gallery";
import NavBar from "@/components/NavBar";

export default function Home() {

  const tags = ["ronaldo", "GOAT", "GOAT2", "messi", "food", "vegetables"]

  return (
    <>
    <NavBar />
    <div className="max-w-6xl mx-4 lg:mx-auto">
      <h1 className="text-3xl font-bold mt-5 mb-10">EXPLORE GALLERY</h1>
      <div className="my-5">
        <h2 className="text-xl font-bold">Trending Tags</h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag)=> (
            <span key={tag} className="bg-gray-200 px-2 py-1 rounded-lg">
            {tag}
          </span>
          ))}
        </div>
      </div>
      <Gallery />
    </div>
    </>
  )
}
