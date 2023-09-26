import Link from 'next/link';

export default function StudentInfo() {
  return (
    <>
      <div>
        <h2>Name: Jean Xristian Pascua </h2>
        <p>Course: CPRG 306 </p>
        <p>Github: <Link href={"https://github.com/JeanXristianPascua"} className='underline'>https://github.com/JeanXristianPascua</Link></p>
      </div>
    </>
  );
}