import Box from "../box"
import Konikmalar from "../konikmalar"
import Navbar from "../navbar"
import Logo from "../Logo"

const HomePages = () => {
    return (
        <div className="flex flex-col gap-40">
            <Navbar />
            <Box />
            <Logo />
            <Konikmalar />
        </div>
    )
}
export default HomePages