package com.cybersamarapan.repository;

import com.cybersamarapan.model.ForumPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ForumPostRepository extends JpaRepository<ForumPost, Long> {
    // Custom query methods if needed
}
