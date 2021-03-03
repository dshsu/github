package com.finalproject.BPALapp;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;

import com.finalproject.BPALapp.model.BPALmodel;
import com.finalproject.BPALapp.repository.BPALRepository;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Rollback(false)
public class BPALTest {

	@Autowired
	private BPALRepository repo;
	
	@Autowired
	private TestEntityManager entityManager;
	
	@Test
	public void testCreatePerfume() {
		BPALmodel perfume = new BPALmodel();
		perfume.setName("Dorian");
		perfume.setLine("Sin and Salvation");
		perfume.setSize("bottle");
		perfume.setDisc(false);
		perfume.setLimited(false);
		
		BPALmodel savedPerfume = repo.save(perfume);
		
		BPALmodel existPerfume = entityManager.find(BPALmodel.class, savedPerfume.getId());
		assertThat(existPerfume.getName()).isEqualTo(perfume.getName());
		
	}
}
