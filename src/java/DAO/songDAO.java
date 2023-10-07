/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package DAO;

import entity.song;
import java.util.ArrayList;
import java.util.List;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
/**
 *
 * @author Hi
 */
public class songDAO {
    static String url="jdbc:mysql://localhost:3306/musicapp";
    static String u="root";
    static String p="";
    
    public static List<song> findAll(){
        List<song> listSong = new ArrayList<>();
        Connection con = null;
        Statement stm = null;
        try{
            Class.forName("com.mysql.jdbc.Driver");
            con = DriverManager.getConnection(url,u,p);
            stm = con.createStatement();
            String sql = "select * from song";
            ResultSet rs = stm.executeQuery(sql);
            if(rs.next()){
                song s = new song(rs.getInt("id"),
                        rs.getString("songName"),
                        rs.getString("songArtist"),
                        rs.getString("songPoster"),
                        rs.getString("songURL"));
            }
        }catch(SQLException ex){
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
        
        return listSong;
    }
    
    public static void insert(song s){
        Connection con = null;
        PreparedStatement stm = null;
        try{
            Class.forName("com.mysql.jdbc.Driver");
            con = DriverManager.getConnection(url,u,p);
            
            
        }catch(SQLException ex){
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
