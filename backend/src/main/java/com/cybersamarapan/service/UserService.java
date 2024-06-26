package com.cybersamarapan.service;

import com.cybersamarapan.model.User;
import com.cybersamarapan.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User signup(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public String login(User user) {
        User existingUser = userRepository.findByEmail(user.getUsername());
        if (existingUser != null && passwordEncoder.matches(user.getPassword(), (String) existingUser.getPassword())) {
            // Generate and return token
            return "dummy-token"; // Replace with actual token generation
        }
        throw new RuntimeException("Invalid credentials");
    }
}
