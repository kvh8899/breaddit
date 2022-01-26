import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrending } from "../../store/trpages";
function Communities() {
  const dispatch = useDispatch();
  const sideBarPages = useSelector((state) => state.sideBarPages);
  async function loadData() {
    await dispatch(getTrending());
  }
  useEffect(() => {
    loadData();
  }, []);
  const ComList = styled.div`
    max-height: 450px;
    width: 100%;
    background-color: white;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  `;
  const Banner = styled.div`
    width: 100%;
    height: 75px;
    background-image: url("https://media.istockphoto.com/photos/man-standing-on-roof-and-look-to-abstract-modern-scifi-colorful-city-picture-id1199433380?k=20&m=1199433380&s=612x612&w=0&h=IqO4LxylFOz5IfZxOdf-66GcM9rP7mph0KhgesmWgaE=");
    background-size: cover;
    background-position: top -20px;
    border-radius: 3px 3px 0px 0px;
    display: flex;
    align-items: flex-end;
  `;
  const TrendingList = styled.ol`
    list-style: none;
    padding: 0px;
    margin: 0px;
  `;
  const TreProfile = styled.img`
    height: 40px;
    width: 40px;
    object-fit: cover;
    border-radius: 100%;
    margin-right: 20px;
    margin-left: 20px;
  `;
  const TreListItem = styled.div`
    display: flex;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-left: 20px;
  `;
  const TreTitle = styled.a`
    margin: 0px;
    color: black;
    max-width: 120px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  `;
  const BannerTitle = styled.p`
    color: white;
    width: 100%;
    padding-left: 20px;
    margin-bottom: 0px;
    padding-bottom: 5px;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2) 20%,
      rgba(0, 0, 0, 0.4) 40%,
      rgba(0, 0, 0, 0.7) 70%,
      rgba(0, 0, 0, 0.8) 100%,
      rgba(0, 0, 0, 1) 100%
    );
  `;
  const TreLi = styled.li`
    border-bottom: 1px solid lightgray;
  `;
  return (
    <ComList>
      <Banner>
        <BannerTitle>Most Followed Communities</BannerTitle>
      </Banner>
      <TrendingList>
        {sideBarPages.map((e, i) => {
          return (
            <TreLi key={e.id}>
              <TreListItem>
                <TreTitle>{i + 1 + "."}</TreTitle>
                <TreProfile src={e.profile_image} alt=""></TreProfile>
                <TreTitle id={e.id} href={`/pages/${e.id}`}>
                  {e.title}
                </TreTitle>
              </TreListItem>
            </TreLi>
          );
        })}
      </TrendingList>
    </ComList>
  );
}

export default Communities;
