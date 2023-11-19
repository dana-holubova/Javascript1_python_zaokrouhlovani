const round = (number) => {


    number = Number(number)

    const decimalPart = Math.abs(number - Math.trunc(number))

    if (decimalPart < 0.5) {
        //console.log(`${decimalPart} - zbytek je < 0.5`)
        return Math.trunc(number)
    }

    else if (decimalPart > 0.5) {
        //console.log(`${decimalPart} - zbytek je > 0.5`)
        return Math.trunc(number) + 1
    }

    else if (decimalPart === 0.5) {

        //console.log('zbytek je 0.5')

        //sudé číslo
        if ((Math.trunc(number) % 2) === 0) {
            //console.log('Číslo je sudé.')
            return Math.trunc(number)

            //liché číslo
        }
        else {
            //console.log('Číslo je liché.')
            if (number < 0) {
                //console.log('záporné')
                return Math.trunc(number) - 1
            }
            else if (number > 0) {
                //console.log('kladné')
                return Math.trunc(number) + 1
            }

        }
    }
}


const number = prompt('Zadejte číslo, které chcete zaokrouhlit: ')

document.body.innerHTML = round(number)