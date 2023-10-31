/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package DAO;

import DAO.cv;
import com.mysql.jdbc.Driver;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import entity.userLogin;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.apache.tomcat.dbcp.dbcp2.DriverManagerConnectionFactory;
/**
 *
 * @author Hi
 */
public class userDAO {
    public static void insert(userLogin u){
        Connection con = null;
        PreparedStatement stm = null;
        try {
            Class.forName(cv.cl);
            con = DriverManager.getConnection(cv.url, cv.u, cv.p);
            String sql = "insert into accounts values (?, ?)";
            stm = con.prepareCall(sql);
            stm.setString(1, u.getUsername());
            stm.setString(2, u.getPassword());
            stm.execute();
            
        }catch(Exception ex){
            Logger.getLogger(songDAO.class.getName()).log(Level.SEVERE, null, ex);
        }finally{
            if(stm!=null){
                try {
                    stm.close();
                } catch (SQLException ex) {
                    Logger.getLogger(songDAO.class.getName()).log(Level.SEVERE, null, ex);
                }
            }
            if(con!=null){
                try {
                    con.close();
                } catch (SQLException ex) {
                    Logger.getLogger(songDAO.class.getName()).log(Level.SEVERE, null, ex);
                }
            }
        }
    }
}
