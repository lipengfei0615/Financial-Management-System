package demo.model;

import java.math.BigDecimal;
import java.util.Date;

public class Demo {
	private String id = "";
	private int year;
	private int month;
	private Date date;
	private BigDecimal bCash;
	private BigDecimal bCard;
	private BigDecimal lCash;
	private BigDecimal lCard;
	private BigDecimal dCash;
	private BigDecimal dCard;
	private BigDecimal orders;
	private BigDecimal income;
	private BigDecimal expense;
	private BigDecimal netIncome;
	private BigDecimal recharge;
	private BigDecimal unionPay;
	private BigDecimal cardAmount;
	private BigDecimal cardBalance;
	private String operator = "";
	private String remark = "";
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
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public BigDecimal getbCash() {
		return bCash;
	}
	public void setbCash(BigDecimal bCash) {
		this.bCash = bCash;
	}
	public BigDecimal getbCard() {
		return bCard;
	}
	public void setbCard(BigDecimal bCard) {
		this.bCard = bCard;
	}
	public BigDecimal getlCash() {
		return lCash;
	}
	public void setlCash(BigDecimal lCash) {
		this.lCash = lCash;
	}
	public BigDecimal getlCard() {
		return lCard;
	}
	public void setlCard(BigDecimal lCard) {
		this.lCard = lCard;
	}
	public BigDecimal getdCash() {
		return dCash;
	}
	public void setdCash(BigDecimal dCash) {
		this.dCash = dCash;
	}
	public BigDecimal getdCard() {
		return dCard;
	}
	public void setdCard(BigDecimal dCard) {
		this.dCard = dCard;
	}
	public BigDecimal getOrders() {
		return orders;
	}
	public void setOrders(BigDecimal orders) {
		this.orders = orders;
	}
	public BigDecimal getIncome() {
		return income;
	}
	public void setIncome(BigDecimal income) {
		this.income = income;
	}
	public BigDecimal getExpense() {
		return expense;
	}
	public void setExpense(BigDecimal expense) {
		this.expense = expense;
	}
	public BigDecimal getNetIncome() {
		return netIncome;
	}
	public void setNetIncome(BigDecimal netIncome) {
		this.netIncome = netIncome;
	}
	public BigDecimal getRecharge() {
		return recharge;
	}
	public void setRecharge(BigDecimal recharge) {
		this.recharge = recharge;
	}
	public BigDecimal getUnionPay() {
		return unionPay;
	}
	public void setUnionPay(BigDecimal unionPay) {
		this.unionPay = unionPay;
	}
	public BigDecimal getCardAmount() {
		return cardAmount;
	}
	public void setCardAmount(BigDecimal cardAmount) {
		this.cardAmount = cardAmount;
	}
	public BigDecimal getCardBalance() {
		return cardBalance;
	}
	public void setCardBalance(BigDecimal cardBalance) {
		this.cardBalance = cardBalance;
	}
	public String getOperator() {
		return operator;
	}
	public void setOperator(String operator) {
		this.operator = operator;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
}
