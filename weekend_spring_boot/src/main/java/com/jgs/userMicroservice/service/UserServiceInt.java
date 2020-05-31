package com.jgs.userMicroservice.service;

import java.util.List;

import com.jgs.userMicroservice.model.User;

public interface UserServiceInt {

	List<User> findAllUsers();

	void createUser(User user);

	User findUserById(Long id);

	void deleteUserById(Long id);

	void updateUserById(Long id, User user);
	
}
