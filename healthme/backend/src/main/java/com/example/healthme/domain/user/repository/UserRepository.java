package com.example.healthme.domain.user.repository;

import com.example.healthme.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;


public interface UserRepository extends JpaRepository<User, Long> {
    // 아이디 중복확인
    boolean existsByUserid(String userid);
    // 로그인에 사용
    Optional<User> findByUserid(String userid);

    // 아이디 비밀번호 찾기
    List<User> findByUsername(String username);

    Optional<User> findByUsernameAndUserid(String username, String userid);

    List<User> findByUsernameAndTel(String username, String tel);
}
