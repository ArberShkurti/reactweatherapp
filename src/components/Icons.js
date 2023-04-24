

const Icons = (icon) => {
    switch (icon) {
        case 'Thunderstorm':
            icon='./components/ikons/11n.png'
            console.log ('vetetima');
            break;
        case 'Drizzle':
            icon='./components/ikons/10d.png'
            console.log ('shiiii');
            break;
        case 'Rain':
            icon='./components/ikons/09d.png'
            console.log ('shi');
            break;
        case 'Snow':
            icon='./components/ikons/13d.png'
            console.log ('debore');
            break;
        case 'Clear':
            icon='./components/ikons/01d.png'
            console.log ('kthjellet');
            break;
        case 'Clouds':
            icon='./components/kcons/04d.png'
            console.log ('re');
            break;
        default:
            icon='./components/ikons/03d.png'
            console.log ('vranesira');
    }
    return icon
}

export default Icons;