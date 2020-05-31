package com.jgs.userMicroservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jgs.userMicroservice.model.User;
import com.jgs.userMicroservice.service.UserServiceImpl;

@RestController
public class MainController {

	@Autowired
	UserServiceImpl userServiceImpl;
	
	@CrossOrigin()
	@GetMapping("/")
	public String index() {
		return "Home Page";
	}
	@CrossOrigin()
	@GetMapping("/users/{id}")
	public User getUser(@PathVariable Long id) {
		return userServiceImpl.findUserById(id);
	}
	@CrossOrigin()
	@GetMapping("/users")
	public List<User> getUsers() {
		return userServiceImpl.findAllUsers();
	}
	@CrossOrigin()
	@PostMapping("/users")
	public void postUser(User user) {
		userServiceImpl.createUser(user);
	}
	@CrossOrigin()
	@PutMapping("/users/{id}")
	public void putUser(@PathVariable Long id, User user) {
		userServiceImpl.updateUserById(id, user);
	}
	@CrossOrigin()
	@DeleteMapping("/users/{id}")
	public void deleteUser(@PathVariable Long id) {
		userServiceImpl.deleteUserById(id);
	}
}
