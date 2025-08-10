document.getElementById("searchBtn").addEventListener("click", () => {
    const username = document.getElementById("usernameInput").value.trim();
    if (!username) {
        alert("Please enter a username");
        return;
    }
    fetchUserData(username);
    fetchRepos(username);
});

function fetchUserData(username) {
    fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(data => {
            if (data.message === "Not Found") {
                alert("User not found");
                return;
            }

            // Left section → Profile image & name
            document.querySelector(".profileImg").innerHTML = `
                <img src="${data.avatar_url}" alt="${data.login}" 
                     class="rounded-full w-40 h-40 object-cover border-4 border-cyan-500">
            `;
            document.querySelector(".username").innerHTML = `
                <span class="text-2xl font-bold">${data.name || data.login}</span>
            `;

            // Right section → User details
            document.querySelector(".rightsection .userDetails").innerHTML = `
                <div class="userName text-black">User Name: <span class="text-xl text-cyan-500">${data.name || "N/A"}</span></div>
                <div class="userBio">Bio: <span class="text-medium">${data.bio || "No bio"}</span></div>
                <div class="userLocation">Location: <span class="text-2xl">${data.location || "Unknown"}</span></div>
                <div class="userFollowers">Followers: <span class="text-2xl">${data.followers}</span></div>
                <div class="userFollowing">Following: <span class="text-2xl">${data.following}</span></div>
                <div class="userRepos">Repos: <span class="text-2xl">${data.public_repos}</span></div>
            `;
        })
        .catch(err => console.error(err));
}


function fetchRepos(username) {
    fetch(`https://api.github.com/users/${username}/repos`)
        .then(res => res.json())
        .then(repos => {
            const repoSection = document.querySelector(".repoSection");
            repoSection.innerHTML = "<h3 class='font-bold'>Repo - Details</h3>";
            repos.forEach(repo => {
                repoSection.innerHTML += `
                    <div class="repoDetails">
                        <div class="reponame font-bold">${repo.name}</div>
                        <div class="repoinfo text-sm">${repo.description || "No description"}</div>
                        <div class="repolink">
                            <a href="${repo.html_url}" target="_blank" 
                               class="text-cyan-400 underline">View Repo</a>
                        </div>
                    </div>
                `;
            });
        })
        .catch(err => console.error(err));
}


const platforms = [
    { logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png", url: "https://leetcode.com" },
    { logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg", url: "https://www.geeksforgeeks.org" },
    { logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/HackerRank_logo.png", url: "https://www.hackerrank.com" },
    { logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Codeforces_logo.png", url: "https://codeforces.com" },
    { logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/CodeChef_new_logo.svg", url: "https://www.codechef.com" },
    { logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg", url: "https://github.com" }
];

const logoContainer = document.getElementById("logoContainer");

// 12 random platform logos add karna
for (let i = 0; i < 12; i++) {
    const random = platforms[Math.floor(Math.random() * platforms.length)];
    const link = document.createElement("a");
    link.href = random.url;
    link.target = "_blank"; // nayi tab me open hoga

    const img = document.createElement("img");
    img.src = random.logo;
    img.alt = "Platform Logo";

    link.appendChild(img);
    logoContainer.appendChild(link);
}