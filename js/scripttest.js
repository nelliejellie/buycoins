
const userStr = localStorage.getItem('user');

const userObj = JSON.parse(userStr);

console.log(userObj)
// get access to the profile image
const img = document.querySelector('.profile_img');
img.setAttribute('src', `${userObj.avatarUrl}`)


// get access to the name element and set it to the github users name
const name = document.querySelector('.names');
if (userObj.name === null){
    name.innerText = ''
}else{
    name.innerText = userObj.name
}


// // get access and set the nickname
// const d = document.querySelector('.nickn');
// d.innerHTML = 'sjsjsjs'

// const biog = document.querySelector('.bio');
// if (userObj.bio === null){
//     biog.innerText = 'No Name updated yet'
// }else{
//     biog.innerText = userObj.bio
// }


userObj.repositories.nodes.forEach(element => {
    const list = document.createElement('div');
    list.setAttribute('class','repo_first_part')

    
    const div_for_repo_name = document.createElement('div');
    const anchor_repo_name = document.createElement('a');
    anchor_repo_name.setAttribute('class','repo_name')
    div_for_repo_name.append(anchor_repo_name);
    list.append(div_for_repo_name)

    //  create and append div for star and append necessary elements
    const div_for_star = document.createElement('div');
    const button_for_star = document.createElement('button');
    const icon_star = document.createElement('i');
    button_for_star.setAttribute('class', 'repo_star');
    icon_star.setAttribute('class', 'far fa-star starman');
    icon_star.setAttribute('id', 'starman');
    button_for_star.innerText = 'Star';
    button_for_star.append(icon_star);
    div_for_star.append(button_for_star);
    list.append(div_for_star);

    // create div for other stuffs and append
    const repo_for_second_part = document.createElement('div');
    repo_for_second_part.setAttribute('class', 'repo_second_part');

    const language_underling = document.createElement('div');
    language_underling.setAttribute('class', 'underlings')
    const icon_lang = document.createElement('i');
    icon_lang.setAttribute('class', 'fas fa-circle');
    if (element.primaryLanguage === null){
        icon_lang.style.color = 'null';
        icon_lang.innerText = 'null';
    }else{
        icon_lang.style.color = element.primaryLanguage.color;
        icon_lang.innerText = element.primaryLanguage.name;
    }
    
    
    language_underling.append(icon_lang);

    const stars_underling = document.createElement('div');
    stars_underling.setAttribute('class', 'underlings emotion');
    const icon_stars = document.createElement('i');
    icon_stars.setAttribute('class', 'far fa-star');
    stars_underling.append(icon_stars);

    const commits_underling = document.createElement('div');
    commits_underling.setAttribute('class', 'underlings emotion')
    commits_underling.innerText = 'commits 9'

    const time_underling = document.createElement('div');
    time_underling.setAttribute('class', 'underlings emotion')
    time_underling.innerText = element.updatedAt;

    // append them under their parent div
    repo_for_second_part.append(language_underling);
    repo_for_second_part.append(stars_underling);
    repo_for_second_part.append(commits_underling);
    repo_for_second_part.append(time_underling);


    anchor_repo_name.innerText = element.name
    anchor_repo_name.href = element.url
    document.getElementById('demo').append(list);
    document.getElementById('demo').append(repo_for_second_part);
    


});