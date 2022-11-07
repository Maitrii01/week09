import Information from "./information";

let info = {
    course: "Welcome to Fullstack Development - I",
    topic: "React JS Programming Week09 Lab exercise",
    id: "101308984",
    name: "Maitri Patel",
    college: "George Brown College, Toronto"
}

function Main() {
    return(
        <>
            <Information information = {info}/>
        </>
    )
}

export default Main;