# 🖖 Rock Paper Scissors Lizard Spock (RPSLS) Game
Inspired by The Big Bang Theory’s twist on Rock-Paper-Scissors 🖖

## 🧩 Project Structure

- **Frontend**: React with TypeScript
- **Backend**: Node.js with Express

## 🚀 Features

- Play Rock-Paper-Scissors-Lizard-Spock against a computer opponent
- See the results of the 10 recent games on the scoreboard
- Reset the scoreboard if desired
- Get motivational messages when losing or on a win streak
- The app supports desktop, tablet & mobile resolutions

## 🎮 Game Rules

- 🪨 Rock crushes Lizard & Scissors
- 📜 Paper covers Rock & disproves Spock \
- ✂️ Scissors cuts Paper & decapitates Lizard \
- 🦎 Lizard poisons Spock & eats Paper \
- 🖖 Spock smashes Scissors & vaporizes Rock 

## 📸 Screenshots

![image](https://github.com/user-attachments/assets/56bdd4ba-0aff-4e17-afd1-15f43c395a5b)
| Tablet  | Mobile |
| ------------- | ------------- |
| ![image](https://github.com/user-attachments/assets/0b9d464f-686f-42f7-bc81-daf7bfdbec74) | ![image](https://github.com/user-attachments/assets/c8aa6c59-2be3-4812-b33c-73c287682ce4) | 

## ⚙️ Technical Details

- Overall approach: tried to use a minimum of additional libraries
- A 4-pixel grid was used for the UI design
- Scoreboard data is stored in local storage
- To calculate the random choice of the computer was used `https://codechallenge.boohma.com/random` endpoint
- There is the `/choice` endpoint, but it's not used on frontend


## 🛠️ Getting Started via 🐳 Docker

### Prerequisites
- Docker & Docker Compose
- Make sure nothing is running on ports `3000` and `5173`
```
docker-compose up --build
```
The frontend runs by default on http://localhost:5173.
The backend runs by default on http://localhost:3000.

## 🛠️ Getting Started (without using Docker)

### Prerequisites
- Node.js (>= 24.x)
- npm

### Backend Setup
```
cd backend
npm install
npm run dev
```
The backend runs by default on http://localhost:3000.

### Frontend Setup
```
cd frontend
npm install
npm run dev
```
The frontend runs by default on http://localhost:5173.

## 📡 API Endpoints
| Method  | Endpoint | Description |
| ------------- | ------------- | ------------- |
| GET  | `/choices`  | Get a list of player's options |
| GET  | `/choice`  | Get a randomly generated choice |
| POST  | `/play`  | Submit a move and get result |

<details>
<summary> Example Messages </summary>

`/choices` example Response:
```
[
    {
        "id": 1,
        "name": "rock"
    },
    {
        "id": 2,
        "name": "paper"
    },
    {
        "id": 3,
        "name": "scissors"
    },
    {
        "id": 4,
        "name": "lizard"
    },
    {
        "id": 5,
        "name": "spock"
    }
]
```

---

`/choice` example Response:
```
{
  "id": 5,
  "name": "spock"
}
```

---

`/play` example Payload:
```
{
  "player": 1
}
```

`/play` example Response
```
{
  "player": "1",
  "computer": "2",
  "results": "lose"
}
```

</details>
