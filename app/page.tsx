
'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center mr-1">
                    <i className="ri-leaf-line text-white text-sm"></i>
                  </div>
                  <div className="text-2xl font-bold text-red-500" style={{fontFamily: "Pacifico, serif"}}>
                    BI
                    <span className="inline-block w-6 h-6 bg-orange-400 border-2 border-emerald-600 rounded-full text-xs text-emerald-600 flex items-center justify-center mx-1 font-bold">
                      O
                    </span>
                    BAND
                  </div>
                </div>
              </Link>
              <div className="ml-2">
                <div className="text-sm text-emerald-600 font-bold">
                  Băng gạc xanh
                </div>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Trang chủ
              </Link>
              <Link href="#product" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Sản phẩm
              </Link>
              <Link href="#ingredients" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Nguyên liệu
              </Link>
              <Link href="#benefits" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Lợi ích
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Về chúng tôi
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Liên hệ
              </Link>
            </nav>
            <button className="md:hidden p-2">
              <i className="ri-menu-line text-xl"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20medical%20facility%20clean%20white%20environment%20with%20soft%20natural%20lighting%2C%20medical%20equipment%20in%20background%2C%20sterile%20hospital%20room%20with%20green%20medical%20supplies%2C%20healthcare%20professional%20setting%20with%20advanced%20medical%20technology%2C%20clean%20minimalist%20design%20with%20subtle%20green%20accents&width=1920&height=1080&seq=bioband-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-white/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                <Link href="/" className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mr-2">
                      <i className="ri-leaf-line text-white text-xl"></i>
                    </div>
                    <div className="text-5xl font-bold text-red-500" style={{fontFamily: "Pacifico, serif"}}>
                      BI
                      <span className="inline-block w-8 h-8 bg-orange-400 border-2 border-emerald-600 rounded-full text-sm text-emerald-600 flex items-center justify-center mx-1 font-bold">
                        O
                      </span>
                      BAND
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="text-2xl text-emerald-600 font-bold">
                      Băng gạc xanh
                    </div>
                  </div>
                </Link>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Băng gạc từ xơ dừa tự nhiên kết hợp dầu mù u và bộ củ nghệ trắng, 
                giúp vết thương mau lành, kháng khuẩn tự nhiên và bảo vệ tối ưu.
                <br />
                <span className="text-emerald-600 font-semibold">
                  🚀 Dự án khởi nghiệp đột phá trong lĩnh vực y tế tự nhiên
                </span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-colors whitespace-nowrap cursor-pointer">
                  Mua ngay 95.000đ
                </button>
                <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-50 transition-colors whitespace-nowrap cursor-pointer">
                  Tư vấn miễn phí
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://static.readdy.ai/image/3d0f26d3d32f052c1ca51bca7e047ab4/74fc206ecc6032428115dd1d3067bf26.png"
                alt="BIOBAND Băng Gạc từ Xơ Dừa"
                className="w-full h-auto rounded-2xl shadow-2xl object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section id="ingredients" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nguyên liệu tự nhiên
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              BIOBAND được chế tạo từ 3 nguyên liệu tự nhiên quý giá, mang lại hiệu quả chữa lành vượt trội
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-emerald-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <img 
                src="https://static.readdy.ai/image/3d0f26d3d32f052c1ca51bca7e047ab4/f12bcf2840feab2c6cd9bd1cec50fb72.jfif"
                alt="Xơ Dừa Tự Nhiên"
                className="w-full h-48 object-cover rounded-lg mb-6 object-top"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Xơ Dừa Tự Nhiên</h3>
              <p className="text-gray-600 leading-relaxed">
                Xơ dừa được chọn lọc kỹ càng, có khả năng thấm hút tuyệt vời và 
                tạo môi trường thông thoáng cho vết thương. Kháng khuẩn tự nhiên 
                và an toàn cho mọi loại da.
              </p>
            </div>
            
            <div className="bg-amber-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <img 
                src="https://readdy.ai/api/search-image?query=Natural%20mu%20u%20oil%20extract%20traditional%20Vietnamese%20herbal%20medicine%20amber%20colored%20oil%20in%20glass%20container%20pure%20herbal%20extract%20clean%20white%20background%20medicinal%20plant%20oil%20high%20quality%20natural%20healing%20oil%20for%20medical%20applications&width=400&height=300&seq=mu-u-oil&orientation=landscape"
                alt="Dầu Mù U"
                className="w-full h-48 object-cover rounded-lg mb-6 object-top"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dầu Mù U</h3>
              <p className="text-gray-600 leading-relaxed">
                Dầu mù u quý hiếm với tính chất kháng viêm mạnh mẽ, giúp giảm đau 
                và thúc đẩy quá trình tái tạo tế bào. Được chiết xuất theo phương 
                pháp truyền thống, giữ nguyên dưỡng chất.
              </p>
            </div>
            
            <div className="bg-yellow-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <img 
                src="https://static.readdy.ai/image/3d0f26d3d32f052c1ca51bca7e047ab4/9ec165f90016229a16236245c51eeae6.jfif"
                alt="Bộ Củ Nghệ Trắng"
                className="w-full h-48 object-cover rounded-lg mb-6 object-top"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bộ Củ Nghệ Trắng</h3>
              <p className="text-gray-600 leading-relaxed">
                Nghệ trắng chứa hàm lượng curcumin cao, có tác dụng chống oxy hóa 
                và kháng viêm tự nhiên. Hỗ trợ làm lành vết thương nhanh chóng 
                và ngăn ngừa sẹo xấu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Sản phẩm BIOBAND
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Băng gạc từ xơ dừa tự nhiên - Kích thước 10cm x 7cm, 2 miếng x 10 gói
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="https://public.readdy.ai/ai/img_res/69ee4016-fb95-44a1-821f-b6cc1b4827c2.jpg"
                    alt="BIOBAND - Băng Gạc Xơ Dừa"
                    className="w-full h-auto rounded-xl shadow-lg object-top"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    BIOBAND - Băng Gạc Xơ Dừa
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center text-lg">
                      <i className="ri-checkbox-circle-line text-emerald-600 mr-3"></i>
                      <span>Kích thước: 10cm x 7cm</span>
                    </div>
                    <div className="flex items-center text-lg">
                      <i className="ri-checkbox-circle-line text-emerald-600 mr-3"></i>
                      <span>Số lượng: 2 miếng x 10 gói (20 miếng)</span>
                    </div>
                    <div className="flex items-center text-lg">
                      <i className="ri-checkbox-circle-line text-emerald-600 mr-3"></i>
                      <span>100% từ xơ dừa tự nhiên</span>
                    </div>
                    <div className="flex items-center text-lg">
                      <i className="ri-checkbox-circle-line text-emerald-600 mr-3"></i>
                      <span>Chiết xuất dầu mù u và nghệ trắng</span>
                    </div>
                    <div className="flex items-center text-lg">
                      <i className="ri-checkbox-circle-line text-emerald-600 mr-3"></i>
                      <span>Kháng khuẩn tự nhiên 100%</span>
                    </div>
                  </div>
                  
                  <div className="bg-emerald-50 p-6 rounded-xl mb-6">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">95.000đ</div>
                    <div className="text-gray-600">Miễn phí vận chuyển toàn quốc</div>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <button className="bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-colors whitespace-nowrap cursor-pointer w-full">
                      Đặt hàng ngay
                    </button>
                    <div className="flex gap-4">
                      <Link 
                        href="https://www.facebook.com/share/p/1Fy3d2f4DZ/" 
                        target="_blank"
                        className="flex-1 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full text-center font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap cursor-pointer"
                      >
                        Xem trên Facebook
                      </Link>
                      <Link 
                        href="https://www.facebook.com/share/p/1YAMs4ibq8/" 
                        target="_blank"
                        className="flex-1 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full text-center font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap cursor-pointer"
                      >
                        Đánh giá
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tại sao chọn BIOBAND?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Với nguyên liệu tự nhiên và công nghệ chế biến hiện đại, BIOBAND mang đến giải pháp chữa lành vượt trội
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-heart-pulse-line text-2xl text-emerald-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Chữa lành nhanh</h3>
              <p className="text-gray-600">
                Kết hợp xơ dừa, dầu mù u và nghệ trắng thúc đẩy quá trình tái tạo tế bào, 
                giúp vết thương lành nhanh gấp 2-3 lần so với băng gạc thông thường.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-shield-check-line text-2xl text-emerald-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Kháng khuẩn tự nhiên</h3>
              <p className="text-gray-600">
                Xơ dừa và dầu mù u có khả năng kháng khuẩn tự nhiên mạnh mẽ, 
                ngăn ngừa nhiễm trùng và bảo vệ vết thương an toàn.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-leaf-line text-2xl text-emerald-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">100% Tự nhiên</h3>
              <p className="text-gray-600">
                Được chế tạo hoàn toàn từ xơ dừa, dầu mù u và nghệ trắng tự nhiên, 
                an toàn cho mọi loại da, không gây kích ứng hay dị ứng.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-water-percent-line text-2xl text-emerald-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Thấm hút tốt</h3>
              <p className="text-gray-600">
                Cấu trúc xơ dừa có khả năng thấm hút dịch tiết xuất sắc, giữ vết thương khô ráo 
                và tạo môi trường lành tính cho quá trình phục hồi.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-time-line text-2xl text-emerald-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bền bỉ lâu dài</h3>
              <p className="text-gray-600">
                Duy trì hiệu quả bảo vệ và chữa lành liên tục, không cần thay đổi thường xuyên, 
                tiết kiệm thời gian và chi phí chăm sóc.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-hand-heart-line text-2xl text-emerald-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dễ sử dụng</h3>
              <p className="text-gray-600">
                Thiết kế thân thiện, dễ dàng sử dụng tại nhà, 
                phù hợp cho mọi độ tuổi từ trẻ em đến người cao tuổi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Về dự án khởi nghiệp BIOBAND
              </h2>
              <div className="bg-white p-6 rounded-xl mb-6 border-l-4 border-emerald-600">
                <h3 className="text-xl font-bold text-emerald-600 mb-3 flex items-center">
                  <i className="ri-rocket-line mr-2"></i>
                  Startup Công Nghệ Y Tế Xanh
                </h3>
                <p className="text-gray-700">
                  BIOBAND là dự án khởi nghiệp tiên phong tại Việt Nam, ứng dụng công nghệ sinh học 
                  để phát triển sản phẩm y tế từ nguyên liệu tự nhiên 100%.
                </p>
              </div>
              
              <p className="text-lg text-gray-700 mb-6">
                Khởi đầu từ ý tưởng tận dụng nguồn tài nguyên dừa phong phú của Việt Nam, 
                đội ngũ trẻ của chúng tôi đã nghiên cứu và phát triển công thức độc quyền 
                kết hợp xơ dừa với dầu mù u và nghệ trắng.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Với tầm nhìn trở thành thương hiệu y tế tự nhiên hàng đầu Đông Nam Á, 
                BIOBAND đang từng bước khẳng định vị thế và mở rộng thị trường, 
                mang giải pháp chữa lành an toàn đến mọi gia đình.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-emerald-600 mb-2">2024</div>
                  <div className="text-gray-600 text-sm">Năm thành lập startup</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-emerald-600 mb-2">100%</div>
                  <div className="text-gray-600 text-sm">Tự nhiên & An toàn</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-emerald-600 mb-2">R&D</div>
                  <div className="text-gray-600 text-sm">Nghiên cứu phát triển</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-emerald-600 mb-2">SEA</div>
                  <div className="text-gray-600 text-sm">Tầm nhìn khu vực</div>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-emerald-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">🎯 <strong>Mission:</strong> Democratize natural healthcare</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-emerald-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">🌱 <strong>Vision:</strong> Leading natural medical brand in SEA</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-emerald-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">⚡ <strong>Innovation:</strong> Biotechnology meets tradition</span>
                </div>
              </div>
              
              <div className="mt-8">
                <Link 
                  href="https://www.facebook.com/share/p/1615SBKWwP/" 
                  target="_blank"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-semibold cursor-pointer"
                >
                  <i className="ri-facebook-fill mr-2"></i>
                  Theo dõi hành trình startup
                </Link>
              </div>
            </div>
            <div>
              <Link href="/" className="flex items-center space-x-2 text-emerald-400 mb-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center mr-1">
                    <i className="ri-leaf-line text-gray-900 text-sm"></i>
                  </div>
                  <div className="text-2xl font-bold text-red-400" style={{fontFamily: "Pacifico, serif"}}>
                    BI
                    <span className="inline-block w-6 h-6 bg-orange-300 border-2 border-emerald-400 rounded-full text-xs text-emerald-400 flex items-center justify-center mx-1 font-bold">
                      O
                    </span>
                    BAND
                  </div>
                </div>
                <div className="ml-2">
                  <div className="text-sm text-emerald-400 font-bold">
                    Băng gạc xanh
                  </div>
                </div>
              </Link>
              <img 
                src="https://readdy.ai/api/search-image?query=Vietnamese%20traditional%20medicine%20herbs%20coconut%20fiber%20processing%20facility%20natural%20ingredients%20dau%20mu%20u%20oil%20white%20turmeric%20roots%20clean%20modern%20production%20environment%20healthcare%20manufacturing%20traditional%20meets%20modern%20technology%20Vietnam&width=600&height=400&seq=bioband-facility&orientation=landscape"
                alt="Về BIOBAND"
                className="w-full h-auto rounded-2xl shadow-lg object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ủng hộ startup Việt - Trải nghiệm BIOBAND
          </h2>
          <p className="text-xl text-emerald-100 mb-4">
            Hãy là một trong những khách hàng đầu tiên ủng hộ dự án khởi nghiệp y tế xanh của chúng tôi
          </p>
          <p className="text-lg text-emerald-200 mb-8">
            🚀 Startup Made in Vietnam • 🌱 100% Natural • ✨ Innovation for Health
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer">
              Ủng hộ startup - 95.000đ
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors whitespace-nowrap cursor-pointer">
              Tư vấn dự án 1900-xxxx
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center mr-1">
                  <i className="ri-leaf-line text-gray-900 text-xs"></i>
                </div>
                <div className="text-2xl font-bold text-red-400" style={{fontFamily: "Pacifico, serif"}}>
                  BI
                  <span className="inline-block w-5 h-5 bg-orange-300 border border-emerald-400 rounded-full text-xs text-emerald-400 flex items-center justify-center mx-1 font-bold">
                    O
                  </span>
                  BAND
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Startup y tế xanh tiên phong tại Việt Nam - Băng gạc từ xơ dừa tự nhiên 
                kết hợp dầu mù u và nghệ trắng, mang đến giải pháp chữa lành an toàn cho mọi gia đình.
              </p>
              <div className="text-sm text-emerald-400 mb-4">
                🚀 Proudly Made in Vietnam Startup
              </div>
              <div className="flex space-x-4">
                <Link href="https://www.facebook.com/share/p/1Fy3d2f4DZ/" target="_blank">
                  <i className="ri-facebook-fill text-xl hover:text-emerald-400 cursor-pointer"></i>
                </Link>
                <i className="ri-instagram-line text-xl hover:text-emerald-400 cursor-pointer"></i>
                <i className="ri-youtube-line text-xl hover:text-emerald-400 cursor-pointer"></i>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Sản phẩm</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#product" className="hover:text-white transition-colors">BIOBAND 10x7cm</Link></li>
                <li><Link href="#ingredients" className="hover:text-white transition-colors">Nguyên liệu tự nhiên</Link></li>
                <li><Link href="#benefits" className="hover:text-white transition-colors">Lợi ích sản phẩm</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Hướng dẫn sử dụng</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Hỗ trợ</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="https://www.facebook.com/share/p/1YAMs4ibq8/" target="_blank" className="hover:text-white transition-colors">Đánh giá khách hàng</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Câu hỏi thường gặp</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Chính sách đổi trả</Link></li>
                <li><Link href="https://www.facebook.com/share/p/1615SBKWwP/" target="_blank" className="hover:text-white transition-colors">Liên hệ hỗ trợ</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <i className="ri-phone-line mr-2"></i>
                  Hotline: 1900-xxxx
                </p>
                <p className="flex items-center">
                  <i className="ri-mail-line mr-2"></i>
                  info@bioband.vn
                </p>
                <p className="flex items-center">
                  <i className="ri-map-pin-line mr-2"></i>
                  Việt Nam
                </p>
                <Link 
                  href="https://www.facebook.com/share/p/1Fy3d2f4DZ/" 
                  target="_blank"
                  className="flex items-center hover:text-white transition-colors mt-3"
                >
                  <i className="ri-facebook-line mr-2"></i>
                  Facebook BIOBAND
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BIOBAND. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
