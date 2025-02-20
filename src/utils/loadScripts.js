const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  };
  
  export const loadExternalScripts = async () => {
    try {
      await loadScript("/vendor/jquery/jquery.min.js");
      await loadScript("/vendor/bootstrap/js/bootstrap.bundle.min.js");
      await loadScript("/assets/js/owl-carousel.js");
      await loadScript("/assets/js/animation.js");
      await loadScript("/assets/js/imagesloaded.js");
      await loadScript("/assets/js/custom.js");
      console.log("All scripts loaded successfully!");
    } catch (error) {
      console.error("Error loading scripts:", error);
    }
  };
  