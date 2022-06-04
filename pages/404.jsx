import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function NotFound() {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() =>{
            router.push('/');
        }, 3000)
    }, [])
  return (
    <div className="not-found">
        <h1>Ooopsss..</h1>
        <h2>That page can&apos;t be found.</h2>
        <p>Go back to  the <Link href="/"><a>Homepage</a></Link></p>
    </div>
  )
}
