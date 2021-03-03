package com.finalproject.BPALapp.model;
import javax.persistence.*;

@Entity
@Table(name = "perfumes")

public class BPALmodel {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "name")
	private String name;

	@Column(name = "line")
	private String line;

	@Column(name = "discontinued")
	private boolean disc;
	
	@Column(name = "size")
	private String size;
	
	@Column(name = "limitededition")
	private boolean limitededition;
	
	public BPALmodel() {
		
	}

	public BPALmodel(String name, String line, String size, boolean disc, boolean limitededition) {
		super();
		this.name = name;
		this.line = line;
		this.size = size;
		this.disc = disc;
		this.limitededition = limitededition;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLine() {
		return line;
	}
	public void setLine(String line) {
		this.line = line;
	}
	public String getSize() {
		return size;
	}
	public void setSize(String size) {
		this.size = size;
	}
	public boolean getDisc() {
		return disc;
	}
	public void setDisc(boolean disc) {
		this.disc = disc;
	}
	public boolean getLimited() {
		return limitededition;
	}
	public void setLimited(boolean limitededition) {
		this.limitededition = limitededition;
	}
	
}
