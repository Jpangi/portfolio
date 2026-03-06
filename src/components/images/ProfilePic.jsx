function ProfilePic() {
  return (
    <img
      src="src/assets/profile-pic.jpeg"
      alt="Jacob Pangi"
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        objectFit: "cover",
        objectPosition: "top",
        display: "block",
      }}
      onError={(e) => {
        e.target.style.display = "none";
        e.target.parentNode.innerHTML =
          '<div style="width:100%;height:100%;border-radius:50%;background:#1a2236;display:flex;align-items:center;justify-content:center;font-size:6rem;">👨‍💻</div>';
      }}
    />
  );
}

export default ProfilePic;