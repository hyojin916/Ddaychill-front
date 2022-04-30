import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
// import styles from "styles/user/mypage.module.scss";

const MyPage: NextPage = () => {
  const router = useRouter();
  const [isAuth] = useState(true);
  return (
    <Wrapper>
      <ProfileBG>
        {!isAuth ? (
          <UserInfoWrap>
            <UserPhoto></UserPhoto>
            <UserNameWrap>
              <UserName>레오와 두리</UserName>
              <ChallengeDay>Day 6</ChallengeDay>
            </UserNameWrap>
          </UserInfoWrap>
        ) : (
          <LoginMenuWrap>
            <LoginButton onClick={() => router.push("/auth/login")}>
              로그인
            </LoginButton>
            <LoginButton onClick={() => router.push("/auth/signup")}>
              회원가입
            </LoginButton>
          </LoginMenuWrap>
        )}
        <ChallengeStatus>
          {isAuth
            ? "레오와 두리님 거의 다 왔어요! 힘내보아요!"
            : "Dday Chill 과 함께 목표 달성을 해보는건 어떠세요?"}
        </ChallengeStatus>
        <ChallengeCntWrap>
          <CntWrap>
            <CntLable>목표 달성</CntLable>
            <CntNumber>7</CntNumber>
          </CntWrap>
          <CntLine></CntLine>
          <CntWrap>
            <CntLable>진행중인 목표</CntLable>
            <CntNumber>1</CntNumber>
          </CntWrap>
        </ChallengeCntWrap>
      </ProfileBG>
      <MenuWrap>
        <MenuItem onClick={() => router.push("./edit")}>
          <MenuText>내 계정</MenuText>
          <ArrowIcon>
            <span className="material-symbols-rounded">arrow_forward_ios</span>
          </ArrowIcon>
        </MenuItem>
        <MenuItem onClick={() => router.push("./badgelist")}>
          <MenuText>뱃지 현황</MenuText>
          <ArrowIcon>
            <span className="material-symbols-rounded">arrow_forward_ios</span>
          </ArrowIcon>
        </MenuItem>
        <AccountMenuWrap>
          <AccountMenu>
            <AccountMenuText>탈퇴하기</AccountMenuText>
            <AccountLine></AccountLine>
            <AccountMenuText>로그아웃</AccountMenuText>
          </AccountMenu>
        </AccountMenuWrap>
      </MenuWrap>
    </Wrapper>
  );
};

export default MyPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ProfileBG = styled.div`
  width: 100%;
  padding: 20px 20px;
  background: linear-gradient(197.78deg, #4d23d6 30.81%, #8dabff 107.31%);
`;
const UserInfoWrap = styled.div`
  margin-top: 86px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const UserPhoto = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: sandybrown;
`;
const UserNameWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;
const UserName = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: #ffffff;
`;
const ChallengeDay = styled.div`
  //   padding: 6px 14px;
  width: 61px;
  height: 29px;
  background: #ffffff;
  border-radius: 6px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 17px;
  color: #4d23d6;
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginMenuWrap = styled.div`
  margin-top: 50px;
`;
const LoginButton = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 26px;
  color: #ffffff;
  margin-bottom: 26px;
  text-decoration: 1px underline;
  text-underline-position: under;
  cursor: pointer;
`;
const ChallengeStatus = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  background-color: #4d23d6;
  margin-top: 36px;
  padding-left: 16px;
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
  color: #ffffff;
`;
const ChallengeCntWrap = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CntWrap = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CntLable = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 26px;
  color: #ffffff;
`;
const CntNumber = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  color: #ffffff;
`;
const CntLine = styled.div`
  height: 39px;
  width: 1px;
  background-color: #ffffff;
`;
const MenuWrap = styled.div`
  padding: 0px 20px;
`;
const MenuItem = styled.div`
  height: 58px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid #cccccd;
  cursor: pointer;
`;
const MenuText = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #252525;
`;
const ArrowIcon = styled.div`
  width: 24px;
  height: 24px;
`;
const AccountMenuWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const AccountMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  bottom: 90px;
`;
const AccountMenuText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  color: #cccccd;
  cursor: pointer;
`;
const AccountLine = styled.div`
  height: 10px;
  width: 1px;
  background-color: #cccccd;
  margin: 0px 8px;
`;
