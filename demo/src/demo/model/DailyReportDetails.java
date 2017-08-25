package demo.model;

import java.math.BigDecimal;

public class DailyReportDetails {
	private String id = "";
	private int year;
	private int month;
	private String dailyReportId = "";
	private String categorize = "";
	private String name = "";
	private BigDecimal cash;
	private BigDecimal card;
	private BigDecimal total;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public int getYear() {
		return year;
	}
	public void setYear(int year) {
		this.year = year;
	}
	public int getMonth() {
		return month;
	}
	public void setMonth(int month) {
		this.month = month;
	}
	public String getDailyReportId() {
		return dailyReportId;
	}
	public void setDailyReportId(String dailyReportId) {
		this.dailyReportId = dailyReportId;
	}
	public String getCategorize() {
		return categorize;
	}
	public void setCategorize(String categorize) {
		this.categorize = categorize;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public BigDecimal getCash() {
		return cash;
	}
	public void setCash(BigDecimal cash) {
		this.cash = cash;
	}
	public BigDecimal getCard() {
		return card;
	}
	public void setCard(BigDecimal card) {
		this.card = card;
	}
	public BigDecimal getTotal() {
		return total;
	}
	public void setTotal(BigDecimal total) {
		this.total = total;
	}
	
}
