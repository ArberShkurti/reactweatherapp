

const Icons = (icon) => {
    console.log (icon)
    switch (icon) {
        case 'Thunderstorm':
            icon='ikons/11n.png'
            console.log ('vetetima');
            break;
        case 'Drizzle':
            icon='ikons/10d.png'
            console.log ('shiiii');
            break;
        case 'Rain':
            icon='ikons/09d.png'
            console.log ('shi');
            break;
        case 'Snow':
            icon='ikons/13d.png'
            console.log ('debore');
            break;
        case 'Clear':
            icon='ikons/01d.png'
            console.log ('kthjellet');
            break;
        case 'Clouds':
            icon='kcons/04d.png'
            console.log ('re');
            break;
        default:
            icon='ikons/03d.png'
            console.log ('vranesira');
    }
    return icon
}

export default Icons;