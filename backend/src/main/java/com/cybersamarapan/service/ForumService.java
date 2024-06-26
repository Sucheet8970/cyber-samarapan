package com.cybersamarapan.service;

import com.cybersamarapan.model.ForumPost;
import com.cybersamarapan.repository.ForumPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ForumService {
    @Autowired
    private ForumPostRepository forumPostRepository;

    public ForumPost createPost(ForumPost post) {
        return forumPostRepository.save(post);
    }

    // Other methods for forum functionality
}
