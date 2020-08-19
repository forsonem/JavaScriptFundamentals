    let friend = 'Erick';

    switch(friend){
        case 'Anna':
            console.log('Hey Tom when will you bring sour doughbread for me');
            break;
        case 'Fred':
            console.log('Hey Fred do you own a wolf in your back yard');
            break;
        default:
            console.log(`Sorry ${friend} do I know you`);
    }

    let yep = true;

    switch(typeof yep == 'string' || typeof yep == 'boolean'){
        case true:
            console.log('yep is a string or a boolean');
            break;
        default:
            console.log('yep is nether a string or a boolean');
    }