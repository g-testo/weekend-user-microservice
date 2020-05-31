package com.jgs.userMicroservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jgs.userMicroservice.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	User findUserById(Long id);
}
