# AttendEase - AI-Based Attendance System

![AttendEase Banner](attendease.png) 
## Overview
AttendEase is an AI-powered attendance system that utilizes facial recognition and anti-spoofing techniques to track student and employee attendance. The system supports automatic attendance marking, real-time verification, and an admin dashboard for management.

## Features
- **AI-Based Facial Recognition**: Detects and verifies faces with anti-spoofing measures.
- **Automated Attendance Logging**: Tracks attendance based on duration and presence.
- **Multi-Factor Authentication**: Supports barcode scanning and biometric checks.
- **Admin Dashboard**: Manage users, subjects, and attendance records.
- **Web-Based Interface**: Accessible from any device.

---

## System Requirements
### Hardware:
- **IP Camera** (for real-time attendance tracking)
- **ESP32 Chip** (optional for IoT integrations)

### Software:
- **Python 3.10** (Recommended for stability)
- **PyCharm IDE** (or Visual Studio Code)
- **Node.js** (For running the web server)
- **MySQL Database** (For data storage)

---

## Installation Guide
### Step 1: Clone the Repository
```bash
 git clone https://github.com/GittyCandy/AttendEase.git
 cd AttendEase
```

### Step 2: Set Up Python Environment
1. Open **PyCharm** and create a new project.
2. Set the Python interpreter to **Python 3.10**.
3. Install prerequisites:
   ```bash
   pip install -r requirements.txt
   ```
4. Ensure `pip`, `setuptools`, and `wheel` are installed:
   ```bash
   pip install pip==23.2.1 setuptools==68.2.0 wheel==0.41.2
   ```

### Step 3: Install Node.js Requirements
1. Check if Node.js is installed:
   ```bash
   node -v
   ```
   If not installed, download from [Node.js Official Website](https://nodejs.org/).

2. Install required packages:
   ```bash
   npm install express csv-parser mysql2 body-parser bcryptjs express-session multer dotenv fs nodemailer
   ```

### Step 4: Configure Database
1. Open `Config/databaseconfig.js`
2. Update the MySQL credentials:
   ```javascript
   module.exports = {
     host: 'localhost',
     user: 'root', // Change this to your MySQL username
     password: '', // Change this to your MySQL password
     database: 'AttendEaseDB'
   };
   ```

### Step 5: Start the Server
```bash
 node ./Server.js
```
This will:
- Create the database and necessary tables.
- Set up a default admin account (`admin@example.com / password`).
- Start the web interface at `http://localhost:3030`.

---

## Testing Face Recognition
### Manual Testing (Without Classroom Setup)
To test the face recognition system manually:
```bash
 python attendancelogfacemanual.py
```
- Uses a webcam for recognition.
- Runs anti-spoofing detection.
- Saves detected faces temporarily.

To verify anti-spoofing, try showing an image or video instead of a real face.

---

## File Structure
```
AttendEase/
├── Server.js            # Main server script
├── Config/
│   ├── databaseconfig.js # Database configuration
├── Models/              # AI and ML models
├── Public/              # Frontend assets
├── Scripts/             # Utility scripts
├── Logs/                # Attendance logs
├── README.md            # This file
```

---

## Documentation
For a detailed guide on using the web dashboard and additional configurations, refer to the project documentation.

---

## Contributing
We welcome contributions! To contribute:
1. Fork the repository.
2. Create a new branch (`feature-branch-name`).
3. Commit changes and push.
4. Submit a pull request.

---

## Contact
For issues or questions, open an issue in the repository or contact us
