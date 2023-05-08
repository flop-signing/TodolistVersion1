

// module.exports is an object.
module.exports=getDate;


// This is for one function.

// function getDate()
// {
//         let today=new Date();
//         let options=
//         {
//         weekday: 'long',
//         day:'numeric',
//         month:'long'

//         }

//         let day=today.toLocaleDateString("en-US",options)    //formatted the date according to the options
//         return day;
// }


// Here we exports multiple functions

// As module.exports is an object. So the way is 

module.exports.getDate=getDate;
function getDate()
{
        let today=new Date();
        let options=
        {
        weekday: 'long',
        day:'numeric',
        month:'long'

        }

        let day=today.toLocaleDateString("en-US",options)    //formatted the date according to the options
        return day;
}

module.exports.getDay=getDay;
function getDay()
{
    let today=new Date();
    let options=
    {
    weekday: 'long'

    }

    let day=today.toLocaleDateString("en-US",options)    //formatted the date according to the options
    return day;
}


