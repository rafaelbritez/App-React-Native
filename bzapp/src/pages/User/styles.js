import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;
export const Header = styled.View`
  align-items: center;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;
export const Avatar = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 50px;
`;
export const Name = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-top: 10px;
  text-align: center;
`;
export const Bio = styled.Text`
  margin-top: 5px;
  line-height: 18px;
  font-size: 14px;
  color: #666;
  text-align: center;
`;
export const Stars = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;
export const Starred = styled.View`
  flex-direction: row;
  background: #f5f5f5;
  border-radius: 5px;
  padding: 10px 15px;
  margin-bottom: 20px;
`;
export const OwnerAvatar = styled.Image`
  height: 42px;
  width: 42px;
  border-radius: 21px;
  background: #eee;
`;
export const Info = styled.View`
  margin: 10px 10px 10px 15px;
  flex: 1;
`;
export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 15px;
  font-weight: bold;
  color: #333;
`;
export const Author = styled.Text`
  font-size: 12px;
  color: #999;
  margin-top: 3px;
`;
