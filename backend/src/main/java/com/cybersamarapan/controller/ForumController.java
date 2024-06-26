package com.cybersamarapan.controller;

import com.cybersamarapan.model.ForumPost;
import com.cybersamarapan.repository.ForumPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/forum")
public class ForumController {

    @Autowired
    private ForumPostRepository forumPostRepository;

    @GetMapping("/posts")
    public List<ForumPost> getAllPosts() {
        return forumPostRepository.findAll();
    }

    @PostMapping("/post")
    public ForumPost createPost(@RequestBody ForumPost post) {
        return forumPostRepository.save(post);
    }
}
