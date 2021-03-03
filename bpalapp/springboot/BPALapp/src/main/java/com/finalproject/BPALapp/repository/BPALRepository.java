package com.finalproject.BPALapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.finalproject.BPALapp.model.BPALmodel;

@Repository
public interface BPALRepository extends JpaRepository<BPALmodel, Long> {

 
}

