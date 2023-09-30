let header = document.createElement('header')
let container = document.createElement('div')
let nav = document.createElement('nav')
let header_box_two = document.createElement('div')
let img1 = document.createElement('img')
let button1 = document.createElement('button')
let img2 = document.createElement('img')
let search_box = document.createElement('div')
let input = document.createElement('input')
let button2 = document.createElement('button')
let comparison = document.createElement('div')
let favourites = document.createElement('div')
let basket = document.createElement('div')
let user = document.createElement('div')
let compimg = document.createElement('img')
let comptext = document.createElement('p')
let favimg = document.createElement('img')
let favtext = document.createElement('p')
let basimg = document.createElement('img')
let bastext = document.createElement('p')
let userimg = document.createElement('img')
let usertext = document.createElement('p')
let redcircle = document.createElement('div')

user.append(userimg, usertext)

basket.append(basimg, bastext, redcircle)

favourites.append(favimg, favtext)

comparison.append(compimg, comptext)

header_box_two.append(comparison, favourites, basket, user)
header_box_two.append(search_box)
header_box_two.append(button1)
header_box_two.append(img1)

nav.append(header_box_two)

container.append(nav)

header.append(container)

document.body.append(header)

console.log(header);



