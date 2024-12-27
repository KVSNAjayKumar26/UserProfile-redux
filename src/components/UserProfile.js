import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile, uploadAvatar } from '../features/userProfileSlice';

const UserProfile = () => {
    const dispatch = useDispatch();
    const userProfile = useSelector((state) => state.userProfile);
    const [name, setName] = useState(userProfile.name);
    const [email, setEmail] = useState(userProfile.email);
    const [avatar, setAvatar] = useState(null);

    const handleProfileUpdate = (e) => {
        e.preventDefault();
        dispatch(updateProfile({ name, email }));
    };

    const handleAvatarUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatar(reader.result);
                dispatch(uploadAvatar(reader.result));
            };
            reader.readAsDataURL(file);
        }
    };

    const styles = {
        container: {
            maxWidth: '600px',
            margin: '0 auto',
            padding: '20px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            borderRadius: '8px',
            backgroundColor: '#fff',
        },
        header: {
            textAlign: 'center',
            marginBottom: '20px',
            color: '#333',
        },
        formGroup: {
            marginBottom: '15px',
        },
        label: {
            display: 'block',
            marginBottom: '5px',
            fontWeight: 'bold',
            color: '#555',
        },
        input: {
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            borderRadius: '4px',
            border: '1px solid #ddd',
            boxSizing: 'border-box',
        },
        fileInput: {
            marginTop: '10px',
        },
        imgPreview: {
            marginTop: '15px',
            display: 'block',
            maxWidth: '100%',
            borderRadius: '4px',
        },
        button: {
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            color: '#fff',
            backgroundColor: '#007BFF',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
        },
        '@media (max-width: 768px)': {
            container: {
                padding: '15px',
            },
            input: {
                fontSize: '14px',
            },
            button: {
                fontSize: '14px',
            },
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>User Profile</h1>
            <form onSubmit={handleProfileUpdate}>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Name:</label>
                    <input
                        type="text"
                        style={styles.input}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Email:</label>
                    <input
                        type="email"
                        style={styles.input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Avatar:</label>
                    <input
                        type="file"
                        style={styles.fileInput}
                        onChange={handleAvatarUpload}
                    />
                    {avatar && (
                        <img
                            src={avatar}
                            alt="Avatar Preview"
                            style={styles.imgPreview}
                        />
                    )}
                </div>
                <button type="submit" style={styles.button}>
                    Update Profile
                </button>
            </form>
        </div>
    );
};

export default UserProfile;
