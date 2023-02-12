
const Footer = () => {
    const today = new Date();
    return (
        <footer className='Footer'>
            <p>Copyright BabaArabi &copy; <span>{today.getFullYear()}</span></p>
        </footer>
    )
}

export default Footer