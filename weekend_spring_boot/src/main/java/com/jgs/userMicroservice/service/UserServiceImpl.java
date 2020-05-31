package com.jgs.userMicroservice.service;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jgs.userMicroservice.model.User;
import com.jgs.userMicroservice.repository.UserRepository;

@Service
public class UserServiceImpl implements UserServiceInt{
	
	@Autowired
	UserRepository userRepository;

	@Override
	public List<User> findAllUsers() {
		return userRepository.findAll();
	}
	
	@Override
	public void createUser(User user) {
		userRepository.save(user);
	}
	
	@Override
	public User findUserById(Long id) {
		return userRepository.findUserById(id);
	}
	
	@Override
	public void updateUserById(Long id, User userChanges) {
		User userFromDB = userRepository.findUserById(id);
		
        BeanUtils.copyProperties(userChanges, userFromDB);
		
//		userFromDB.setName(userChanges.getName());
//		userFromDB.setEmail(userChanges.getEmail());
//		userFromDB.setRole(userChanges.getRole());
		
		userRepository.save(userFromDB);
		
	}
	
	@Override
	public void deleteUserById(Long id) {
		userRepository.deleteById(id);
	}
	
	public int add(int num1, int num2) {
		return num1+num2;
	}

}
