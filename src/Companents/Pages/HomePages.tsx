import Box from "../box"
import Konikmalar from "../konikmalar"
import Logo from "../Logo"

const HomePages = () => {
    return (
        <div className="flex flex-col gap-40">
            <Box />
            <Logo />
            <Konikmalar />
        </div>
    )
}
export default HomePages