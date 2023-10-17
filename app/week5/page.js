import ItemList from "./item-list";
import Link from "next/link";

export default function Page() {
  return (
    <>
    <main>
        <div>
            <h1 className="text-3xl font-bold m-2">My Shopping List</h1>
        </div>
        <div>
            <ItemList />
        </div>
        <div>
            <Link href="../" className="underline">Back</Link>
        </div>
    </main>
    </>
  );
}