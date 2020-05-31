package com.jgs.userMicroservice;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.jgs.userMicroservice.service.UserServiceImpl;

@SpringBootTest
class WeekendUserMicroServiceApplicationTests {

	@Autowired
	UserServiceImpl userServiceImpl;
	
	@Test
	void contextLoads() {
		int actual = userServiceImpl.add(10, 5);
		Assertions.assertEquals(15, actual);;
	}

}
