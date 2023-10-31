import Link from "next/link";
import StudentInfo from "./StudentInfo";

export default function Page() {
  return (
    <main>
      <div>
        <h1> CPRG 306: Web Development 2 - Assignments</h1>
      </div>
      <div>
        <StudentInfo />
      </div>
      <div>
        <Link href="./week2" className="underline">Week 2</Link>
      </div>
      <div>
        <Link href="./week3" className="underline">Week 3</Link>
      </div>
      <div>
        <Link href="./week4" className="underline">Week 4</Link>
      </div>
      <div>
        <Link href="./week5" className="underline">Week 5</Link>
      </div>
      <div>
        <Link href="./week6" className="underline">Week 6</Link>
      </div>
      <div>
        <Link href="./week7" className="underline">Week 7</Link>
      </div>
      <div>
        <Link href="./week8" className="underline">Week 8</Link>
      </div>
    </main>
  );
}