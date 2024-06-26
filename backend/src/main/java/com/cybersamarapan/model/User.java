package com.cybersamarapan.model;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String email;

    private String password;

    public String getEmail() {
        return null;
    }

    public void setPassword(String encode) {
    }

    public CharSequence getPassword() {
        return null;
    }

    public String getUsername() {
        return "";
    }

    // Getters and setters
}
