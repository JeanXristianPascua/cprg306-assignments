import StudentInfo from "../StudentInfo";
import Link from "next/link";

export default function Page() {
    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex-">
                <h1 className="text-4xl">My Shopping List</h1>
            </div>
            <div>
                <StudentInfo />
            </div>
            <div>
                <Link href="../" className="underline">Back</Link>
            </div>
        </main>
    );
}